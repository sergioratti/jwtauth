import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl:string = 'http://localhost:3300/api';

  constructor(private http:HttpClient) { }

  getUsers(){
    return this.http.get(`${this.baseUrl}/users/all`,{withCredentials:true});
  }
}
