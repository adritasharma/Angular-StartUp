import { Component, OnInit } from '@angular/core';
import { LoginRequest } from '../_common/shared/models/login.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  userdetails:LoginRequest = new LoginRequest


  ngOnInit() {
  }

  login() {
    this.router.navigate(['user'])
  }

}
