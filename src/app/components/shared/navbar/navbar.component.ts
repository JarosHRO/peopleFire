import { Component, OnInit, Input } from '@angular/core';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public activeNav: boolean = true;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.activeNav$.subscribe(show => {
      this.activeNav = show;
    })
  }

}
