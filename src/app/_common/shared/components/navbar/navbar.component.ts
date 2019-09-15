import { Component, OnInit } from '@angular/core';
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _session: SessionService) { }

  ngOnInit() {
    console.log(this._session.getLoggedinUserData())
  }

  logOut():void {
    this._session.logOut()
  }

}
