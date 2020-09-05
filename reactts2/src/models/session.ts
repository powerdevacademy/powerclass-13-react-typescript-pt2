import User from "./user";

type UserSession = {
    isLogged: boolean,
    user?: User,
    token?: string
}

export default UserSession;