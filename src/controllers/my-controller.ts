import {UserProfile, authenticate, AuthenticationBindings} from '@loopback/authentication';
import {inject} from '@loopback/core';
import {get} from '@loopback/rest';

export class MyController {
  constructor(@inject(AuthenticationBindings.CURRENT_USER) private user: UserProfile) {}

  @authenticate('BasicStrategy')
  @get('/whoAmI')
  whoAmI() {
    return this.user.id;
  }
}
