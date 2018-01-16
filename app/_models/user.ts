﻿import {Roles} from "./roles";
import {Permission} from "./permission";

export class User {
    public id: number;
    public username: string;
    public password: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public attempts: number;
    public roles: Roles[];
    public permissions: Permission[];

    constructor(
                username: string,
                password: string,
                firstName: string,
                lastName: string,
                email: string,
                attempts: number,
               ) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.attempts = attempts;

    }


}

