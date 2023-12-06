// login

export interface ILoginRequest {
    login: string
    password: string
}

export interface ILoginResponse {
    acssesToken: string
}