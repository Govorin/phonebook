import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NzModalRef } from 'ng-zorro-antd';
import { Contact, ContactsService } from '../../state/contacts';

@Component({
  selector: 'app-contact-editor',
  templateUrl: './contact-editor.component.html',
  styleUrls: ['./contact-editor.component.less']
})
export class ContactEditorComponent implements OnInit {
  formValue: Contact;
  form: FormGroup = new FormGroup({
    firstName: new FormControl(null, [Validators.required]),
    lastName: new FormControl(null, [Validators.required]),
    phoneNumber: new FormControl(null, [Validators.required]),
    job: new FormControl(null),
    email: new FormControl(null, [Validators.email]),
  });

  jobList: string[] = [
    'Designer',
    'Consultant',
    'Architect',
    'Agent',
    'Coordinator',
    'Specialist'
  ];

  constructor(
    private contactsService: ContactsService,
    public nzModalRef: NzModalRef
  ) {}

  ngOnInit(): void {
    if (this.formValue) { this.form.patchValue(this.formValue); }
  }

  async patchContact() {
    await this.contactsService
      .patch(this.formValue.id, this.form.value)
      .toPromise();
    this.nzModalRef.close();
  }

  async createContact() {
    await this.contactsService
      .post(this.form.value)
      .toPromise();
    this.nzModalRef.close();
  }
}
