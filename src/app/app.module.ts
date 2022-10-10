import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdddonorComponent } from './adddonor/adddonor.component';
import { SearchdonorComponent } from './searchdonor/searchdonor.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AdddonorComponent,
    SearchdonorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
