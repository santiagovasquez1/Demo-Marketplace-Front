import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularMaterialModule } from '../angular-material.module';
import { UserComponent } from './user/user.component';
import { AgentsComponent } from './user/admin/agents/agents.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { OrdersComponent } from './user/admin/orders/orders.component';
import { NavAdminComponent } from '../shared/nav/nav-admin/nav-admin.component';
import { NavComponent } from '../shared/nav/nav.component';
import { NavGeneratorComponent } from '../shared/nav/nav-generator/nav-generator.component';
import { PlantsComponent } from './user/generator/plants/plants.component';
import { SignComponent } from './sign/sign.component';
import { HeaderComponent } from '../shared/header/header.component';
import { AuthComponent } from '../auth/auth.component';
import { SpinnerComponent } from '../shared/spinner/spinner.component';
import { PaymentComponent } from './user/admin/payment/payment.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ModalComponent } from '../shared/modal/modal.component';



@NgModule({
  declarations: [
    PagesComponent,
    SignComponent,
    AgentsComponent,
    ModalComponent,
    HeaderComponent,
    SpinnerComponent,
    AuthComponent,
    NavAdminComponent,
    NavGeneratorComponent,
    UserComponent,
    OrdersComponent,
    PlantsComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    JwtModule,
    MatExpansionModule,
    AngularMaterialModule
  ]
})
export class PagesModule { }
