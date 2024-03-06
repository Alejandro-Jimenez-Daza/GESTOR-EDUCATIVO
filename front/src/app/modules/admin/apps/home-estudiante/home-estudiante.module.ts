import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeEstudianteComponent } from './home-estudiante.component';
import { Route, RouterModule } from '@angular/router';
import { MaterialModule } from '../material.module';

const routes: Route[] = [
  {
      path     : '',
      component: HomeEstudianteComponent
  }
];


@NgModule({
  declarations: [
    HomeEstudianteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ]
})
export class HomeEstudianteModule { }
