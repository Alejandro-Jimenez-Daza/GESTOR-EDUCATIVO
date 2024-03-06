import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeAcudienteComponent } from './home-acudiente.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';


const routes: Route[] = [
  {
      path     : '',
      component: HomeAcudienteComponent
  }
];


@NgModule({
  declarations: [
    HomeAcudienteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class HomeAcudienteModule { }
