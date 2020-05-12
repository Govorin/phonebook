import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Observable } from 'rxjs';
import { Contact } from './contact.model';
import { ContactsStore, ContactsState } from './contacts.store';

@Injectable({ providedIn: 'root'})
export class ContactsQuery extends QueryEntity<ContactsState> {
  readonly contacts$ = this.selectAll();

  get contacts(): Observable<Contact[]> {
    return this.contacts$;
  }
  constructor(protected store: ContactsStore) {
    super(store);
  }
}
