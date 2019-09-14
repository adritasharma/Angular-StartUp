import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';


export const userRoutes: Routes = [
    { path: '', component: UserComponent },
];

@NgModule({
    exports: [RouterModule]
})

export class UserRoutingModule {
}
