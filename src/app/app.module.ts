import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {NavComponent} from "./header/nav.component";
import {AppRoutingModule} from "./routing/app-routing.module";
import {MenuComponent} from "./menu/menu.component";
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, NavComponent, MenuComponent, AboutComponent, ContactComponent, HomeComponent, FooterComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
