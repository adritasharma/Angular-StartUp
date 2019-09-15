export interface ILoginRequest {
    userName: string;
    password: string;
}


export interface ILoginResponse {
    userName: string;
    token: string;
    firstName: string;
    lastName: string;
}

export class LoginRequest implements ILoginRequest{
    constructor(public userName: string = '', public password: string = '') { }
}