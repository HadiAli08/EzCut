import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodInfo } from 'src/app/models/food-info';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-user-add-food-info',
  templateUrl: './user-add-food-info.component.html',
  styleUrls: ['./user-add-food-info.component.css']
})
export class UserAddFoodInfoComponent implements OnInit {
  foodInfo = new FoodInfo();
  constructor(private service:RestService,private router:Router) { }

  ngOnInit(): void {
  }
  AddFoodInfo(){
    this.service.AddFoodInfo(this.foodInfo).subscribe(
      data => { alert('Food Added Successfully..'),
      this.router.navigate(['user/view-food-info']);
    },
    error => {
        console.log(error);
      }
    )
  }

}
