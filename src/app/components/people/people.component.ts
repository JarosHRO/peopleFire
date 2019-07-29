import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "../../../../node_modules/@angular/router";
import { PeoplesService } from "../../services/peoples.service";
import { HomeService } from '../../services/home.service';

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  public people: any;

  constructor(
    private activateRoute: ActivatedRoute,
    private peoplesService: PeoplesService,
    private homeService: HomeService
  ) {}

  ngOnInit() {
    // this.activateRoute.params.subscribe(({ id }) => {
    //   this.peoplesService.getPeopleById(id).subscribe(data => {
    //     console.log(data)
    //     this.people = data;
    //   });
    // });
    this.homeService.setActiveNav(true);
  }
}
