import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

{ path: '', redirectTo: 'home', pathMatch: 'full'},
{ path: 'users', component: UserSignupComponent},
{ path: 'login', component: UserLoginComponent},
{ path: 'home', component: HomeComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
