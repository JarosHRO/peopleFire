import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { of } from 'rxjs';
import { People } from '../models/people';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class PeoplesService {

  public peopleCollection: AngularFirestoreCollection<People>;
  public people: Observable<Array<People>>;
  public peopleDoc: AngularFirestoreDocument<People>;

  constructor(public afs: AngularFirestore) {
    // this.people = afs.collection('people').valueChanges();
    this.peopleCollection = afs.collection<People>('people');
    this.people = this.peopleCollection.snapshotChanges().pipe(
      map(actions => actions.map( a => {
        const data = a.payload.doc.data() as People;
        const id = a.payload.doc.id;
        return {id, ...data };
      }))
    );
  }

  getPeoples() {
    return this.people;
  }

  addPeople(people: People) {
    this.peopleCollection.add(people);
  }

}
