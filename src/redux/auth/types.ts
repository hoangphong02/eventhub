export interface User {
    id: number | string;
    name: string;
}
export interface LoginPayload {
    email: string,
    password: string,
}

export interface AuthState {
    isLoggedIn: boolean,
    logging?: boolean,
    currentUser?: User
}