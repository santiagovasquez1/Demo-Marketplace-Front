import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from '../angular-material.module';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './user/admin/admin.component';
import { MatExpansionModule } from '@angular/material/expansion';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    LoginComponent,
    AdminComponent,
    UserComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    AngularMaterialModule
  ]
})
export class PagesModule { }
