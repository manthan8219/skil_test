
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  errors:String[]= [];

  constructor(private services: ServicesService,private router: Router) { }

  ngOnInit(): void {
  }


details:any = new FormGroup({
  First_Name: new FormControl(''),
  Last_Name:new FormControl(''),
  Email_Address: new FormControl(''),
  Password: new FormControl(''),
  Phone_number: new FormControl('',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]),
  Home_Address: new FormControl('')
})


get Phone_number(){
  return this.details.get('Phone_number')
}


  Create_adhar_card(){

    console.warn(this.details.value)
    this.services.add_details(this.details.value).subscribe((response:any)=>{
    if(response.status == 200){
        this.router.navigateByUrl('/admin')
    }else if(response.status  == 400){
      console.log(response)
      this.errors.push("user is already present cahnage the email id or contact number")
      this.router.navigateByUrl('/add')
    }
    })
  }

}
