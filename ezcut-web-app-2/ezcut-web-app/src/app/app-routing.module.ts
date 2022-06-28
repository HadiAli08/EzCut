import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AddFoodInfoComponent } from './foodinfo/add-food-info/add-food-info.component';
import { ViewFoodInfoComponent } from './foodinfo/view-food-info/view-food-info.component';

import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserAddFoodInfoComponent } from './user/user-add-food-info/user-add-food-info.component';
import { UserViewFoodInfoComponent } from './user/user-view-food-info/user-view-food-info.component';
import { NutritionalInfo } from './models/nutritional-info';
import { ViewNutritionalInfoComponent } from './view-nutritional-info/view-nutritional-info.component';
import { UserAddNutritionalInfoComponent } from './user/user-add-nutritional-info/user-add-nutritional-info.component';
import { UserViewNutritionalInfoComponent } from './user/user-view-nutritional-info/user-view-nutritional-info.component';
import { NutritionalInfoComponent } from './nutritional-info/nutritional-info.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [

  {
    path: '',
    component: SigninComponent
  },
  {
    path: 'signin',
    component: SigninComponent
  },
  
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'user-dashboard',
    component: UserDashboardComponent
  },
  {
    path:'add-food-info',
    component:AddFoodInfoComponent
  },
  {
    path:'view-food-info',
    component:ViewFoodInfoComponent
  },
  {
    path: 'add-nutritional-info',
    component: NutritionalInfoComponent
  },
  {
    path: 'view-nutritional-info',
    component: ViewNutritionalInfoComponent
  },
  {
    path: 'user/add-nutritional-info',
    component: UserAddNutritionalInfoComponent
  },
  {
    path: 'user/view-nutritional-info',
    component: UserViewNutritionalInfoComponent
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },
  {
    path:'user/add-food-info',
    component:UserAddFoodInfoComponent
  },
  {
    path:'user/view-food-info',
    component:UserViewFoodInfoComponent
  },
  {
    path:'view-users',
    component:UsersComponent
  },
  {path:'edit-user/:pid',component:EditUserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
