import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ContactsService } from './state/contacts';

@Injectable()
export class ContactsResolverService implements Resolve<unknown> {

  constructor(private contactsService: ContactsService) { }

  async resolve() {
    await this.contactsService.get().toPromise();

  }
}
