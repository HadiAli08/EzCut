import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private service:RestService,private _router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.service.logout();
    this._router.navigate(['signin']);
  }
}
