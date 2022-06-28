import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-user-navbar',
  templateUrl: './user-navbar.component.html',
  styleUrls: ['./user-navbar.component.css']
})
export class UserNavbarComponent implements OnInit {

  constructor(private service:RestService,private _router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout();
    this._router.navigate(['signin']);
  }

}
