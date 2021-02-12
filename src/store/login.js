// consts
const LOGIN_USER = 'login';

// actions
export const logUser = () => ({
    type: LOGIN_USER
})



// Initial State
const initialState = {
    logged: false
}


// reducer
export default function login(state = initialState, action) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state,
                logged: true
            }
        default:
            return state
    }
}