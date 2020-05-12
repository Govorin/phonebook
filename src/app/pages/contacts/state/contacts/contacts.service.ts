import { Injectable } from '@angular/core';
import { guid, ID } from '@datorama/akita';
import { Contact } from './contact.model';
import { ContactsStore } from './contacts.store';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  constructor(private contactsStore: ContactsStore, private http: HttpClient) {}

  get() {
    return this.http
      .get<Contact[]>('/contacts')
      .pipe(tap(entities => this.contactsStore.set(entities)));
  }

  delete(id: ID) {
    return this.http
      .delete(`/contacts/${id}`)
      .pipe(tap(() => this.contactsStore.remove(id)));
  }

  patch(id: ID, contact: Contact) {
    return this.http
      .patch(`/contacts/${id}`, { ...contact })
      .pipe(tap(() => this.contactsStore.update(id, contact)));
  }

  post(contact: Contact) {
    const value = { ...contact, id: guid() };
    return this.http.post(`/contacts`, value).pipe(tap(() => this.contactsStore.add(value)));
  }
}
