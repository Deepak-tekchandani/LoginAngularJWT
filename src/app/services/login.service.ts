import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl="http://localhost:8082/token"

  constructor(private http:HttpClient) { }

  //calling server to generate the token
  generateToken(credentials:any){
    //generate the token
    return this.http.post(`${this.baseurl}`,credentials)

  }

  //for login user

  loginUser(token:any){
    localStorage.setItem("token",token)
    return true;

  }
    // to check that user is logged in or not
  isLoggedIn(){
    let token = localStorage.getItem("token");
    if(token==undefined || token=='' || token==null){
      return false;
    }else{
      return true;
    }
  }
  // for logout the user
  logout(){
    localStorage.removeItem('token')
    return true;
  }

  //get token
  getToken(){
    return localStorage.getItem("token")
  }
}
