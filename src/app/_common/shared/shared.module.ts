import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    NavbarComponent,
    NotFoundComponent
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent
  ]
})
export class SharedModule { }
