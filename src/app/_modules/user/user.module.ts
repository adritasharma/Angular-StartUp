import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.routing.module';
import { CoreModule } from 'src/app/_common/core/core.module';
import { UserToursComponent } from './tours/user-tours/user-tours.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    CoreModule
  ],
  declarations: [
    UserComponent,
    UserToursComponent
  ]
})
export class UserModule { }
