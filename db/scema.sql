CREATE TABLE users (
    UserID serial primary key,
    first_name varChar(50),
    last_name varChar(50),
    email varChar(100),
    picture_url varChar(200),
    auth_id varChar(50)
);