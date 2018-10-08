import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SlideshowModule} from 'ng-simple-slideshow';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NavbarDropdownComponent} from './navbar-dropdown/navbar-dropdown.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {OfficerInfoComponent} from './officer-info/officer-info.component';
import {AnnouncementsComponent} from './announcements/announcements.component';
import {CalendarComponent} from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDropdownComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OfficerInfoComponent,
    AnnouncementsComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlideshowModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
