import {Injectable} from '@angular/core'
import {IProfile} from './iprofile'

@Injectable()

export class ProfileService{
 getProfiles(): IProfile[]{
    return [{
      Name:'Varun',
      Age: 25
    },
    {
      Name:'Alice',
      Age: 23
    }];
  }
}