import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
import {User} from "../../Classes/user";
import {LoginService} from "../../services/login-service/login.service";
import {newUser} from "../../Classes/newUser";

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
    'firstName': new FormControl('',[Validators.required]),
    'lastName': new FormControl('',[Validators.required]),
    'email': new FormControl('',[Validators.required, Validators.email]),
    'password': new FormControl('',[Validators.required]),
  })
  logUser: User = new User('','');
  newUser: newUser = new newUser('','','','');
  isLogging: boolean = true
  route: any


  ngOnInit() {
    this.switchIsLogging()
  }

  constructor(private activateRoute: ActivatedRoute, private loginService: LoginService){}

  loggingToggler(): void{
    this.isLogging = !this.isLogging;
  }

  login(): void {
    const { password, email } = this.loginForm.value;
    const logUser = { password, email };
    console.log('logUser:', logUser);
    this.loginService.loginUser(logUser).subscribe(res => console.log(res));
    alert('you are logged in');
  }

  register(): void {
    const { firstName, lastName, email, password } = this.registrationForm.value;
    const newUser = { firstName, lastName, email, password };
    console.log('newUser:', newUser);
    this.loginService.registerUser(newUser).subscribe(res => console.log(res));
    alert('Confirmation email was sent')
  }


  switchIsLogging(): void{
    this.route = this.activateRoute.url.subscribe(value => {
      if (value[0].path === 'registration'){
        this.isLogging = false
      }
    })
  }

}
