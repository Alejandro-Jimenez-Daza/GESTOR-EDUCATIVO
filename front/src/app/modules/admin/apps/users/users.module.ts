import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { MaterialModule } from '../material.module';

const routes: Route[] = [
  {
      path     : '',
      component: UsersComponent
  }
];

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class UsersModule { }
