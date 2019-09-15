import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CoreModule } from '../core/core.module';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ListToursComponent } from './components/list-tours/list-tours.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    ListToursComponent
  ],
  exports: [
    NavbarComponent,
    NotFoundComponent,
    ListToursComponent
  ]
})
export class SharedModule { }
