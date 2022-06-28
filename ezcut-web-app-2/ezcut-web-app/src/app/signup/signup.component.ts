import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  user = new User();
  constructor(private service:RestService,private router:Router) { }

  ngOnInit(): void {
  }
  RegisterUser(){
    this.service.RegisterUser(this.user).subscribe(
      data => { alert('Your Are Registered Successfully..'),
      this.router.navigate(['signin']);
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
      this.RegisterUser()
      //console.log(this.bmi);
      
     }
    
  }
}
