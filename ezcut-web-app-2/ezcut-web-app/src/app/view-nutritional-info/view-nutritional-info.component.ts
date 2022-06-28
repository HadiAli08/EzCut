import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NutritionalInfo } from '../models/nutritional-info';
import { User } from '../models/user';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-view-nutritional-info',
  templateUrl: './view-nutritional-info.component.html',
  styleUrls: ['./view-nutritional-info.component.css']
})
export class ViewNutritionalInfoComponent implements OnInit {

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
  public onDeleteNutritionalInfo(nutritional_info: NutritionalInfo): void {
     
     this.service.deleteNutritionalInfo(nutritional_info.id,nutritional_info).
     subscribe(
      data => {
        alert('Nutritional Info Deleted..')
        this.ViewNutritionalInfo();
  
      },
      (error: HttpErrorResponse) => {
        alert(error.statusText);
      }
    );
     }

}
