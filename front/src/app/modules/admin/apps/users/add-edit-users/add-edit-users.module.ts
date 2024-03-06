import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AddEditUsersComponent } from './add-edit-users.component';
import { MaterialModule } from '../../material.module';

const routes: Route[] = [
  {
      path     : '',
      component: AddEditUsersComponent
  }
];

@NgModule({
  declarations: [AddEditUsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class AddEditUsersModule { }
