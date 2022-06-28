import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  user = new User();
  pid;
  constructor(private service:RestService,private router:Router,private _route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.pid = this._route.snapshot.params['pid'];
    this.service.getUserById(this.pid).subscribe((data:any)=>{
      this.user = data;
      console.log(this.user);
    },
    (error)=>{
      alert("problem");
    })
  }

  
  UpdateCalculateBmi(){
  this.service.UpdateUser(this.user).subscribe(
      data => { alert('Updated User Successfully..'),
      this.router.navigate(['view-users']);
    },
    error => {
        console.log(error);
      }
    )
  }

  CalculateBmi(){
     if((this.user.currentWeight == undefined) && (this.user.heightInInches == undefined)){
      alert("Enter Wight and Height To Calculate BMI")
      return
     }else{
      this.user.bmi = Number(this.user.currentWeight) * Number(this.user.heightInInches);
      this.UpdateCalculateBmi()
      //console.log(this.bmi);
      
     }
    
  }
}
