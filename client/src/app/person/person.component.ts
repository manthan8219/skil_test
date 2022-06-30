import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor(private services: ServicesService) { }

  details:any


  ngOnInit(): void {
  console.log(this.details)
    this.details = this.services.getResult()
  }


  



}
