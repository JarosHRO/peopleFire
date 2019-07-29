import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// routes
import { app_routing } from './app.routes';

// services
import { PeoplesService } from './services/peoples.service';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PeoplesComponent } from './components/peoples/peoples.component';
import { SearchPipe } from './pipe/search.pipe';
import { PeopleComponent } from './components/people/people.component';
import { LoginComponent } from './components/login/login.component';
import { AddPeopleComponent } from './components/add-people/add-people.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    PeoplesComponent,
    SearchPipe,
    PeopleComponent,
    LoginComponent,
    AddPeopleComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'peopleInformation'),
 	  AngularFirestoreModule
  ],
  providers: [
    PeoplesService,
    {
      provide: 'CanAlwaysActivateGuard',
      useValue: () => {
        return true;
      }
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
