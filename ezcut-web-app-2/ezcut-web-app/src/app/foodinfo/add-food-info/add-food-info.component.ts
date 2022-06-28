import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FoodInfo } from 'src/app/models/food-info';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-food-info',
  templateUrl: './add-food-info.component.html',
  styleUrls: ['./add-food-info.component.css']
})
export class AddFoodInfoComponent implements OnInit {
  foodInfo = new FoodInfo();
  constructor(private service:RestService,private router:Router) { }

  ngOnInit(): void {
  }
  AddFoodInfo(){
    this.service.AddFoodInfo(this.foodInfo).subscribe(
      data => { alert('Food Added Successfully..'),
      this.router.navigate(['view-food-info']);
    },
    error => {
        console.log(error);
      }
    )
  }
}
