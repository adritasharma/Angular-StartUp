import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule
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
