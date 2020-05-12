import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../shared/guards/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { AuthModule } from './auth/auth.module';
import { ContactsResolverService } from './contacts/contacts-resolver.service';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsModule } from './contacts/contacts.module';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  { path: '', redirectTo: '/auth', pathMatch: 'full' },
  {
    path: 'auth',
    component: AuthComponent
  },
  {
    path: 'contacts',
    component: ContactsComponent,
    canActivate: [ AuthGuard ],
    resolve: [ ContactsResolverService ]
  }
];

@NgModule( {
  declarations: [ PagesComponent ],
  exports: [ PagesComponent ],
  providers: [ ContactsResolverService ],
  imports: [ CommonModule, RouterModule.forRoot( routes ), AuthModule, ContactsModule ]
} )
export class PagesModule {
}
