import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 
  constructor(private http: HttpClient) { }
   httpHeaders = new HttpHeaders().set("content-type", "application/json")

   add_details(data:any){
    const header = {"Authorization": this.getToken()}
    return this.http.post('http://localhost:5000/api/admin/',data,{'headers':header})
   }

   login(data:any){
    return this.http.post('http://localhost:5000/api/auth/',data)
   }

  getAllMembers(){
    const header = {"Authorization": this.getToken()}
    return this.http.get('http://localhost:5000/api/admin/',{'headers':header})
  }

 result:any
  setResult(data:any){
    this.result = data
  }

  getResult(){
    return this.result
  }

  setToken(token:any){
     window.localStorage["jwt_token"]=token
  }

  getToken(){
    return window.localStorage["jwt_token"]
  }

  logout(){
 window.localStorage.removeItem('jwt_token')
  }


}
