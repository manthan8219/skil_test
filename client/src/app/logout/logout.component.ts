import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private services: ServicesService,private router:Router) { }

  ngOnInit(): void {
  }
 
  logout(){
    this.services.logout()
    this.router.navigateByUrl('/')
  }
}
