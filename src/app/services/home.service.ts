import { Injectable } from '@angular/core';
import { Subject } from '../../../node_modules/rxjs';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private activeNav: Subject<boolean> = new Subject<boolean>();

  activeNav$ : Observable<boolean> = this.activeNav.asObservable();  

  constructor() { }

  setActiveNav(response: boolean) {
    this.activeNav.next(response);
  }
  
}
