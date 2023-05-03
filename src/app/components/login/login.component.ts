import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../Classes/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  loginForm: FormGroup = new FormGroup({
    'email': new FormControl('',[Validators.email,Validators.required]),
    'password': new FormControl('',[Validators.required])
  });

  registrationForm: FormGroup = new FormGroup({
    'userName': new FormControl('',[Validators.required]),
    'userSurname': new FormControl('',[Validators.required]),
    'email': new FormControl('',[Validators.required, Validators.email]),
    'password': new FormControl('',[Validators.required]),
  })
  newUser: User = new User("","");
  isLogging: boolean = true


  ngOnInit() {}
  constructor() {}

  loggingToggler(){
    this.isLogging = !this.isLogging;
  }

  login(){
    this.newUser.password = this.loginForm.get('password')?.value
    this.newUser.email = this.loginForm.get('email')?.value
    console.log(this.newUser)
  }

  register(){

  }

}
