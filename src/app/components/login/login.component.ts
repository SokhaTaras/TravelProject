import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";
import {User} from "../../Classes/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({
    'email': new FormControl(),
    'password': new FormControl()
  });
  isRegistration: boolean = false;
  newUser: User = new User("","");

  ngOnInit() {}
  constructor() {}


  login(){
    this.newUser.password = this.loginForm.get('password')?.value
    this.newUser.email = this.loginForm.get('email')?.value
    console.log(this.newUser)
  }
}
