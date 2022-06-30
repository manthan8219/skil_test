import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private services: ServicesService,private router: Router) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    Email_Address: new FormControl(''),
    Password: new FormControl(''),
     });

login(){
  this.services.login(this.loginForm.value).subscribe((response:any)=>{
    if(response.isAdmin===false){
      this.services.setResult(response)
      console.warn(response)
     this.router.navigateByUrl('/details')
    }
    else if(response.isAdmin===true){
      this.services.setToken(response.token)
      this.router.navigateByUrl('/admin')
    }
    else{
      console.warn("wrong")
    }
  })
}

}
