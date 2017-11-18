import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms'
import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HttpClientModule, HttpClient, HttpHeaders} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { AirlineComponent } from './airline/airline.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AirlineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule {
}
