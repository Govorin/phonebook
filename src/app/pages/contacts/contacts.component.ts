import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';
import { ContactEditorComponent } from './components/contact-editor/contact-editor.component';
import { Contact, ContactsQuery, ContactsService } from './state/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.less']
})
export class ContactsComponent implements OnInit {
  searchControl: FormControl = new FormControl('');
  constructor(
    private contactsService: ContactsService,
    public contactsQuery: ContactsQuery,
    private modalService: NzModalService
  ) {}
  ngOnInit() {}
  onDeleteContact(contact: Contact) {
    this.modalService.create({
      nzTitle: 'Удаление контакта',
      nzContent: `Вы действительно хотите удалить контакт '${contact.firstName} ${contact.lastName}'`,
      nzOnOk: () => this.contactsService.delete(contact.id).subscribe(),
      nzOkText: 'Удалить',
      nzCancelText: 'Отмена'
    });
  }
  onEditContact(contact: Contact) {
    this.modalService.create({
      nzTitle: 'Редактирование контакта',
      nzContent: ContactEditorComponent,
      nzComponentParams: {
        formValue: contact
      }
    });
  }
  onCreateContact() {
    this.modalService.create({
      nzTitle: 'Редактирование контакта',
      nzContent: ContactEditorComponent
    });
  }
}
