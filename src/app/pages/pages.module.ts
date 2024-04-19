import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AngularMaterialModule } from '../angular-material.module';
import { UserComponent } from './user/user.component';
import { AgentsComponent } from './user/admin/agents/agents.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { OrdersComponent } from './user/admin/orders/orders.component';
import { EnergyPlantsComponent } from './user/generator/energy-plants/energy-plants.component';
import { NavAdminComponent } from '../shared/nav/nav-admin/nav-admin.component';
import { NavComponent } from '../shared/nav/nav.component';
import { NavGeneratorComponent } from '../shared/nav/nav-generator/nav-generator.component';
import { PlantsComponent } from './user/generator/plants/plants.component';



@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
    LoginComponent,
    AgentsComponent,
    NavAdminComponent,
    NavGeneratorComponent,
    UserComponent,
    OrdersComponent,
    PlantsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatExpansionModule,
    AngularMaterialModule
  ]
})
export class PagesModule { }
