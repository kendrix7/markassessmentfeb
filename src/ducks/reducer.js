import axios from 'axios';

const initialState = {
    userName: ''
};

const GET_USER = 'GET_USER';

// 43F
export function getUser() {
    return {
        type: GET_USER,
        payload: axios.get('/auth/me').then(res => res)

    }
}

// 43E
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_USER_PENDING':
            return state;

        case 'GET_USER_FULFILLED':
            return Object.assign({}, state, {
                userData: {
                    userId: action.payload.data.id,
                    first_name: action.payload.data.first_name
                }
            })
        case 'GET_USER_REJECTED':
            return state;
    }
}