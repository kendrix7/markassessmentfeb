require('dotenv').config();

const express = require('express')
    , bodyParser = require('body-parser')
    , cors = require('cors')
    , massive = require('massive')
    , session = require('express-session')
    , passport = require('passport')
    , Auth0Strategy = require('passport-auth0')
    , PORT = 7070;

const app = express(); // 74C

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
});

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {
    const db = app.get('db')
        , userData = profile._json;
    db.find_user([userData.identities[0].user_id])
        .then((user) => {
            if (user[0]) {
                return done(null, user[0].user_id);
            } else {
                db.create_user([
                    userData.given_name,
                    userData.family_name,
                    userData.email,
                    userData.picture,
                    userData.identities[0].user_id
                ]).then((user) => {
                    return done(null, user[0].user_id);
                })
            }
        });
}))
passport.serializeUser(function (id, done) {
    done(null, id);
    console.log(id);
})
passport.deserializeUser(function (id, done) {
    app.get('db').find_session_user([id])
        .then((user) => {
            return done(null, user[0]); // put on req.user for BACKEND use
        })
})

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: '/#/',
    failureRedirect: '/auth'
}))
app.get('/auth/me', (req, res) => {
    if (req.user) {
        return res.status(200).send(req.user);
    } else {
        return res.status(401).send('Please log in.');
    }
})
app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(308, '/');
})

// endpoints

app.get('/calendar/month/:month', (req, res) => {
    const db = app.get('db');
    db.get_distinct_days([req.params.month]).then((response) => res.send(response));
})

app.get('/calendar/day/:day/:month', (req, res) => {
    const db = app.get('db');
    db.get_distinct_times([req.params.day, req.params.month]).then((response) => res.send(response));
})

// 74D-3
app.post('/calendar/submit', (req, res) => {
    const db = app.get('db');
    console.log(req.body)
    const { month, day, time } = req.body; 
    db.create_booking([ req.user.user_id, month, day, time ]).then(response => {
        db.delete_time([req.body.time_id])
    })
    .catch(err => console.log(err))
})

// fake delete 74D-4
// app.delete('/calendar/month/:month', (req, res) => {
//     const db = app.get('db');
//     db.delete_user(user[0]).then((response) => res.send(response));
// })

app.listen(PORT, () => { console.log(`Server listening on port: ${PORT}.`); });