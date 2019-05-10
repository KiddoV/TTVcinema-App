export interface User {
    id: number;
    username: string;
    password: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface UserNameAndPass {
    username: string;
    password: string;
}