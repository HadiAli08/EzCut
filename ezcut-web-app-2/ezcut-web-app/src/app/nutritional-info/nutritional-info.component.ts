import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionalInfo } from '../models/nutritional-info';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-nutritional-info',
  templateUrl: './nutritional-info.component.html',
  styleUrls: ['./nutritional-info.component.css']
})
export class NutritionalInfoComponent implements OnInit {

  nutritional = new NutritionalInfo();
  
  constructor(private service:RestService,private router:Router) { }

  ngOnInit(): void {
  }
  AddNutritionalInfo(){
    this.service.AddNutritionalInfo(this.nutritional).subscribe(
      data => { alert('Nutritional Info Added Successfully..'),
      this.router.navigate(['/view-nutritional-info']);
    },
    error => {
        console.log(error);
      }
    )
  }
}
