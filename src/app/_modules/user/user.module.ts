import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routing.module';
import { ToursComponent } from './tours/tours.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
  ],
  declarations: [
    UserComponent,
    ToursComponent
  ]
})
export class UserModule { }
