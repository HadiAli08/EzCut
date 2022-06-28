import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FoodInfo } from 'src/app/models/food-info';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-user-view-food-info',
  templateUrl: './user-view-food-info.component.html',
  styleUrls: ['./user-view-food-info.component.css']
})
export class UserViewFoodInfoComponent implements OnInit {
  foodInfo : FoodInfo[] = [];
  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.ViewFoodInfo();
  }
  public ViewFoodInfo(): void {
  
    this.service.ViewAllFoodInfo().subscribe(
      (response: FoodInfo[]) => {
        
        this.foodInfo = response;
        
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        
      }
    );
  }

}
