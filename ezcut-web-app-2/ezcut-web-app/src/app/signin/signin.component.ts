import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginData = {
    user_Name: '',
    user_Password: ''
  }
  user = new User();
  
  constructor(private service:RestService,private router:Router) { }
  ngOnInit(): void {
  }
  loginUser() {

    this.service.generateToken(this.loginData).subscribe(
      (data: any) => {
        this.service.loginUser(data.token);
        alert("logged In Success")
        this.service.getCurrentUser().subscribe(
          (user:User)=>{
            this.service.setUser(user);
              if(user.role.role_Id == 1){
                this.router.navigate(['admin-dashboard']);
              }else{
                this.router.navigate(['user-dashboard']);
                
              }
            }
        )
  
      }, (error) => {
        console.log(error);
      alert("Bad Credentials Try To Enter Correct Username/Password")
      }
  
    );
    }
}
