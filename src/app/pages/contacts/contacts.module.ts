import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NzButtonModule,
  NzDropDownModule,
  NzIconModule, NzInputModule,
  NzModalConfirmContainerComponent,
  NzModalModule,
  NzModalService
} from 'ng-zorro-antd';
import { NgxMaskModule } from 'ngx-mask';
import { SharedModule } from '../../shared/shared.module';
import { ContactEditorModule } from './components/contact-editor/contact-editor.module';
import { ContactsComponent } from './contacts.component';



@NgModule({
  declarations: [ContactsComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    NzDropDownModule,
    NzIconModule,
    NzModalModule,
    ContactEditorModule,
    NgxMaskModule,
    NzInputModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [
    NzModalService
  ],
  entryComponents: [NzModalConfirmContainerComponent]
})
export class ContactsModule { }
