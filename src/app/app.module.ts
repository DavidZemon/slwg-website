import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavbarDropdownComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OfficerInfoComponent,
    AnnouncementsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
