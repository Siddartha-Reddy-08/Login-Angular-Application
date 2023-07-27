import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { InsertComponent } from './insert/insert.component';

const routes: Routes = [
  { path: 'display', component: DisplayComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'insert', component: InsertComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
