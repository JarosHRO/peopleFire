import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loading:boolean = false;

  constructor(private homeService: HomeService, private router:Router) {
    this.homeService.setActiveNav(false);
   }

  ngOnInit() {
  }

  login(){
  }

  cancel(){
    this.router.navigate(['home']);
  }
}
