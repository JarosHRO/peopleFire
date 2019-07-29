import { Component, OnInit } from '@angular/core';
import { People } from '../../models/people';
import { PeoplesService } from '../../services/peoples.service';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit {

  public people: People = new People();

  constructor(private peoplesService: PeoplesService) { }

  ngOnInit() {
    this.people = {
      id: '',
      name: '',
      biography: '',
      heroe: ''
    };
  }

  sendPeople() {
    this.peoplesService.addPeople(this.people);
  }

}
