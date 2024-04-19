import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { AngularMaterialModule } from '../angular-material.module';
import { NavAdminComponent } from './nav/nav-admin/nav-admin.component';
import { NavGeneratorComponent } from './nav/nav-generator/nav-generator.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    NavAdminComponent,
    NavGeneratorComponent,
    NotFoundComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class SharedModule { }
