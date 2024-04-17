import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { GeneratorComponent } from './generator/generator.component';
import { AngularMaterialModule } from '../angular-material.module';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    LoginComponent,
    GeneratorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class PagesModule { }
