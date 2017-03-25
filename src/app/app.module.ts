import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { LoginComponent } from './components/auth/login.component';
import { LogoutComponent } from './components/auth/logout.component';
import { ContactComponent } from './components/contact.component';

import { routing } from './app.routing';

import { DropdownModule } from 'ng2-bootstrap/dropdown';
import { TabsModule } from 'ng2-bootstrap/tabs';

import { AuthenticationService } from './services/authentication.service';
// import { ContactsService } from './services/contacts.service';
// import { NavsModule } from 'ng2-bootstrap/nav/nav.module';

// import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // bootstrap

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AboutComponent,
    LoginComponent,
    LogoutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    DropdownModule.forRoot(),
    TabsModule.forRoot()
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
