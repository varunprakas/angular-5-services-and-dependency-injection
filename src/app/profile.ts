import {Component, Injectable} from '@angular/core';

import {ProfileService} from './profile.service';
import {IProfile} from './iprofile';

@Component({
  selector: 'profile',
  template: `
    <div  *ngFor="let profile of MyProfile">
      <h2>Name : {{profile.Name}}</h2>
      <h4>Age : {{profile.Age}}</h4>
    </div>
  `
})

export class Profile implements OnInit{

  ProfileList : IProfile[];
  MyProfile : IProfile;
  constructor(private _profileService: ProfileService){
   
  }
  
  ngOnInit(){
    this.ProfileList = this._profileService.getProfiles();
    this.MyProfile = this.ProfileList;
  }
}