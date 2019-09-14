import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LandingComponent } from './home/landing/landing.component';
import { SharedModule } from './_common/shared/shared.module';

@NgModule({
   declarations: [
      AppComponent,
      LoginComponent,
      LandingComponent
   ],
   imports: [
      BrowserModule,
      SharedModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
