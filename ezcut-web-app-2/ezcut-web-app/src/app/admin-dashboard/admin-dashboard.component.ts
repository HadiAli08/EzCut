import { Component, OnInit } from '@angular/core';
import { NutritionalInfo } from '../models/nutritional-info';
import { User } from '../models/user';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  pId;
  nutritional: NutritionalInfo;
  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.service.getCurrentUser().subscribe(
      (user:User)=>{
        this.service.setUser(user);
          //this.pId = user.user_Id;
          this.service.getNutritionalInfoByUserId(user.user_Id).subscribe((data:any)=>{
            this.nutritional = data;
              console.log(this.nutritional);
              
        },(error)=>{
            console.log(error);
            
        })    
        }
    )
   
  }

}
