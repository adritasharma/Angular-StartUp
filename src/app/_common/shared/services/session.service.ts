import { Injectable } from '@angular/core';
import { ILoginResponse } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor() { }

  login(loginData: ILoginResponse):void {
    localStorage.setItem('loginData', JSON.stringify(loginData));
  }

  logOut():void {
    localStorage.removeItem('loginData');
  }

  getLoggedinUserData(): ILoginResponse {
    return JSON.parse(localStorage.getItem('loginData'))
  }

}
