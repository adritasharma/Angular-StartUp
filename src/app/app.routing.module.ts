import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './home/landing/landing.component';
import { NotFoundComponent } from './_common/shared/not-found/not-found.component';
import { LoginComponent } from './login/login.component';


export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'login', component: LoginComponent },
    // {
    //     path: 'admin',
    //     loadChildren: './modules/admin/admin.module#AdminModule',
    //     canActivate: [AppRouteGuard], data: { loginType: 'admin' }
    // },
    // {
    //     path: 'user',
    //     loadChildren: './modules/employer/employer.module#EmployerModule',
    //     canActivate: [AppRouteGuard], data: { loginType: 'employer' }
    // },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    exports: [RouterModule]
})

export class AppRoutingModule {
}
