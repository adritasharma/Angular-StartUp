import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
