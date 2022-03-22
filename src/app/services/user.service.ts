import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url='http://localhost:8082/getusers'

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(`${this.url}`)
  }
}
 