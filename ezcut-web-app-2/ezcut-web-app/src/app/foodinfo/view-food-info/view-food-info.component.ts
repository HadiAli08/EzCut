import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FoodInfo } from 'src/app/models/food-info';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-view-food-info',
  templateUrl: './view-food-info.component.html',
  styleUrls: ['./view-food-info.component.css']
})
export class ViewFoodInfoComponent implements OnInit {
  foodInfo : FoodInfo[] = [];
  content;
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
  Search(){
    if (this.content == "") {
      this.ngOnInit();
    } else {
      this.foodInfo = this.foodInfo.filter(res =>{
        return res.name.toLocaleLowerCase().match(this.content.toLocaleLowerCase());
      })
    }
}
  public onDeleteFoodInfo(food: FoodInfo): void {
     
    this.service.deleteFoodInfo(food.id,food).
    subscribe(
     data => {
       alert('Food Info Deleted..')
       this.ViewFoodInfo();
 
     },
     (error: HttpErrorResponse) => {
       alert(error.statusText);
     }
   );
    }

}
