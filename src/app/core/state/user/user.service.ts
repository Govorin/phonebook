import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserStore } from './user.store';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private userStore: UserStore,
              private http: HttpClient) {
  }

  auth(user: {username: string; password: string}) {
    this.userStore.update(state => ({ user: user.username}));
  }
}
