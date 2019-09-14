export interface LoginRequest {
    userName: string;
    password: string;
}


export interface LoginResponse {
    userName: string;
    token: string;
    firstName: string;
    lastName: string;
}

export class LoginRequest {
    constructor(public userName: string = '', public password: string = '') { }
}