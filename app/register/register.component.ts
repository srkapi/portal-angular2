﻿import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AlertService, UserService } from '../_services/index';
import {User} from "../_models/User";
import {Permission} from "../_models/Permission";
import {Roles} from "../_models/Roles";
import {UserForm} from "../_models/UserForm";
import {observable} from "rxjs/symbol/observable";

@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html'
})


export class RegisterComponent {
    model = new UserForm("","","","","","","");


    loading = false;

    constructor(
        private router: Router,
        private userService: UserService,
        private alertService: AlertService) { }

    onSubmit(){
        let user = new User(this.model.username,this.model.password,this.model.firstName,
            this.model.lastName,this.model.email,0);

        var permision = new Permission(this.model.rolesPermissions);
        var rol = new Roles(this.model.userRoles, permision);
        user.permissions.push( permision);
        user.roles.push(rol);
        this.userService.create(user).subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log("Error occured");
            }
        );


    }
}
