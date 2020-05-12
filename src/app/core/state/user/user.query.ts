import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserStore, UserState } from './user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
  user$ = this.select('user');
  get isLoggedIn(): boolean {
    return !!this.store.getValue().user;
  }
  constructor(protected store: UserStore) {
    super(store);
  }

}
