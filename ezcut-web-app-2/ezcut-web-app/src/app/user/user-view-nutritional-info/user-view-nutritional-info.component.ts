import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NutritionalInfo } from 'src/app/models/nutritional-info';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-user-view-nutritional-info',
  templateUrl: './user-view-nutritional-info.component.html',
  styleUrls: ['./user-view-nutritional-info.component.css']
})
export class UserViewNutritionalInfoComponent implements OnInit {
  nutritional : NutritionalInfo[] = [];
  constructor(private service:RestService) { }

  ngOnInit(): void {
    this.ViewNutritionalInfo();
  }
  public ViewNutritionalInfo(): void {
  
    this.service.ViewAllNutritionalInfo().subscribe(
      (response: NutritionalInfo[]) => {
        
        this.nutritional = response;
        
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        
      }
    );
  }

}
