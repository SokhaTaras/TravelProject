import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {mainLink} from "../../Enums/main-link";
import {User} from "../../Classes/user";
import {newUser} from "../../Classes/newUser";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {}

    loginUser(user: User){
      return this.http.post(`${mainLink}/login`, user);
    }

    registerUser(newUser: newUser){
      return this.http.post(`${mainLink}/registration`, newUser);
    }
}
