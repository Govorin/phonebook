import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { NzButtonModule, NzIconModule, NzInputModule, NzModalModule, NzSelectModule } from 'ng-zorro-antd';
import { ContactEditorComponent } from './contact-editor.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};



@NgModule({
  declarations: [ContactEditorComponent],
  imports: [
    CommonModule,
    NzButtonModule,
    ReactiveFormsModule,
    NzInputModule,
    NzIconModule,
    NzSelectModule,
    NzModalModule,
    NgxMaskModule.forRoot(options),

  ],
  entryComponents: [ContactEditorComponent]
})
export class ContactEditorModule { }
