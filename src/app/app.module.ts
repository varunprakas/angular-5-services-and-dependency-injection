import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Profile} from './profile'
import {ProfileService} from './profile.service';




@NgModule({
  declarations: [
    Profile
  ],
  imports: [
    BrowserModule
  ],
  providers: [
  	ProfileService
  ],
  bootstrap: [Profile]
})
export class AppModule { }
