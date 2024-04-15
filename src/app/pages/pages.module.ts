import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AngularMaterialModule } from '../angular-material.module';
import { PagesComponent } from './pages.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AngularMaterialModule
  ]
})
export class PagesModule { }
