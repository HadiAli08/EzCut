import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { authInterceptorProvider } from './my-interceptopr.interceptor';
import { AddFoodInfoComponent } from './foodinfo/add-food-info/add-food-info.component';
import { ViewFoodInfoComponent } from './foodinfo/view-food-info/view-food-info.component';
import { UserAddFoodInfoComponent } from './user/user-add-food-info/user-add-food-info.component';
import { UserViewFoodInfoComponent } from './user/user-view-food-info/user-view-food-info.component';
import { UserNavbarComponent } from './user/user-navbar/user-navbar.component';
import { ViewNutritionalInfoComponent } from './view-nutritional-info/view-nutritional-info.component';
import { UserAddNutritionalInfoComponent } from './user/user-add-nutritional-info/user-add-nutritional-info.component';
import { UserViewNutritionalInfoComponent } from './user/user-view-nutritional-info/user-view-nutritional-info.component';
import { NutritionalInfoComponent } from './nutritional-info/nutritional-info.component';
import { UsersComponent } from './users/users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavbarComponent,
    UserNavbarComponent,
    UserDashboardComponent,
    AdminDashboardComponent,
    AddFoodInfoComponent,
    ViewFoodInfoComponent,
    UserAddFoodInfoComponent,
    UserViewFoodInfoComponent,
    NutritionalInfoComponent,
    ViewNutritionalInfoComponent,
    UserAddNutritionalInfoComponent,
    UserViewNutritionalInfoComponent,
    UsersComponent,
    EditUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
