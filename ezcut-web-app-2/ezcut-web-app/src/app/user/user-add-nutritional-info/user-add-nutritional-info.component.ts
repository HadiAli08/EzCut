import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NutritionalInfo } from 'src/app/models/nutritional-info';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-user-add-nutritional-info',
  templateUrl: './user-add-nutritional-info.component.html',
  styleUrls: ['./user-add-nutritional-info.component.css']
})
export class UserAddNutritionalInfoComponent implements OnInit {

  nutritional = new NutritionalInfo();
  
  constructor(private service:RestService,private router:Router) { }

  ngOnInit(): void {
  }
  AddNutritionalInfo(){
    this.service.AddNutritionalInfo(this.nutritional).subscribe(
      data => { alert('Nutritional Info Added Successfully..'),
      this.router.navigate(['/user/view-nutritional-info']);
    },
    error => {
        console.log(error);
      }
    )
  }
}
