import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../_common/shared/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  userdetails:LoginRequest = new LoginRequest


  ngOnInit() {
  }

}
