import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private services: ServicesService) { }
 data:any

  ngOnInit(): void {
    this.services.getAllMembers().subscribe((res)=>{
      console.log(res)
  this.data= res
    })
  }

}
