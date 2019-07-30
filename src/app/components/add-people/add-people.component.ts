import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { People } from '../../models/people';
import { PeoplesService } from '../../services/peoples.service';

@Component({
  selector: 'app-add-people',
  templateUrl: './add-people.component.html',
  styleUrls: ['./add-people.component.css']
})
export class AddPeopleComponent implements OnInit, OnChanges {

  public people: People = new People();

  constructor(private peoplesService: PeoplesService, private cd: ChangeDetectorRef) { }

  ngOnChanges(changes: SimpleChanges) {

  }

  ngOnInit() {
    this.people = {
      name: '',
      biography: '',
      heroe: ''
    };
  }

  sendPeople() {
    this.peoplesService.addPeople(this.people);
    this.cd.detectChanges();
  }

}
