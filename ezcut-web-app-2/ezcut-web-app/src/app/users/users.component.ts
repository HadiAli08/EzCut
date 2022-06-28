import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodInfo } from '../models/food-info';
import { User } from '../models/user';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user : User[] = [];
  pId;
  constructor(private service:RestService,private _route:ActivatedRoute) { }

  ngOnInit(): void {
    this.pId =  this._route.snapshot.params['user_Id'];
    this.ViewAllUsers();
  }
  public ViewAllUsers(): void {
  
    this.service.ViewAllUsers().subscribe(
      (response: User[]) => {
        
        this.user = response;
        
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        
      }
    );
  }
  public onDeleteUser(user: User): void {
     
    this.service.deleteUser(user.user_Id,user).
    subscribe(
     data => {
       alert('User Deleted..')
        this.ViewAllUsers();
 
     },
     (error: HttpErrorResponse) => {
       alert(error.statusText);
     }
   );
    }


}
