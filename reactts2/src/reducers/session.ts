import User from '../models/user';
import UserSession from '../models/session';

const initialState: UserSession = {
    isLogged: false
}

type Action = {
    type: string,
    payload?: {
        user: User,
        token: string
    }
}

const session = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {
                isLogged: true,
                user: action.payload?.user,
                token: action.payload?.token
            }
        case 'LOGOUT': 
            return {
                ...initialState
            }
        default:
            return { ...state }
    }
}

export default session;