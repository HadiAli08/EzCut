import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodInfo } from '../models/food-info';
import { NutritionalInfo } from '../models/nutritional-info';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class RestService {
  private url = 'http://localhost:8080';
  constructor(private http:HttpClient) { }


  public getCurrentUser(){
    return this.http.get(`${this.url}/current-user`)
  }

  public generateToken(user:any){
    return this.http.post(`${this.url}/token`,user);
  }

  //set token to local storage

  public loginUser(token:string){
    localStorage.setItem('token',token);
    return true;
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token');
    if(tokenStr == undefined || tokenStr == '' || tokenStr == null){
        return false;
    }else{
      return true;
    }
  }
  public RegisterUser(user:User):Observable<User>{
    return this.http.post<User>(`${this.url}/user/register_user`,user)
  }
  public AddFoodInfo(foodInfo:FoodInfo):Observable<FoodInfo>{
    return this.http.post<FoodInfo>(`${this.url}/foods/create_food_info`,foodInfo)
  }
  public ViewAllFoodInfo():Observable<FoodInfo[]>{
    return this.http.get<FoodInfo[]>(`${this.url}/foods/`)
  }
  public ViewAllUsers():Observable<User[]>{
    return this.http.get<User[]>(`${this.url}/user/users`)
  }
  public AddNutritionalInfo(nutritional_info:NutritionalInfo):Observable<NutritionalInfo>{
    return this.http.post<NutritionalInfo>(`${this.url}/nutritional_info/create_nutritional_info`,nutritional_info)
  }
  public ViewAllNutritionalInfo():Observable<NutritionalInfo[]>{
    return this.http.get<NutritionalInfo[]>(`${this.url}/nutritional_info/`)
  }
  public logout(){
      localStorage.removeItem('token');
      return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user: User){
    localStorage.setItem('user',JSON.stringify(user));
  }

  public getUser(){
    let userStr = localStorage.getItem('user');
    if(userStr != null){
      return JSON.parse(userStr);
    }else{
      this.logout();
      return null;
    }
  }
  public getUserRole(){
    let user = this.getUser();
    return user.role.role_Name;

  }
  public deleteNutritionalInfo(userId:number,value: any): Observable<any>{
    return this.http.delete(`${this.url}/nutritional_info/delete/${userId}`,value);
  }
  public deleteUser(userId:number,value: any): Observable<any>{
    return this.http.delete(`${this.url}/user/delete/${userId}`,value);
  }
  public deleteFoodInfo(userId:number,value: any): Observable<any>{
    return this.http.delete(`${this.url}/foods/delete/${userId}`,value);
  }
  public getNutritionalInfoByUserId(pId):Observable<any> {
    return this.http.get(`${this.url}/nutritional_info/${pId}`);
  }
  public getUserById(pId):Observable<any> {
    return this.http.get(`${this.url}/user/${pId}`);
  }
  public UpdateUser(user) {
    return this.http.put(`${this.url}/user/update_user`, user)
  }
}
