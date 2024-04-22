import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { PagesComponent } from './pages.component';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { AgentsComponent } from './user/admin/agents/agents.component';
import { OrdersComponent } from './user/admin/orders/orders.component';
import { PlantsComponent } from './user/generator/plants/plants.component';
import { NotFoundComponent } from '../shared/not-found/not-found.component';
import { AuthRoutingModule } from '../auth/auth.routing';
import { AuthComponent } from '../auth/auth.component';
import { PaymentComponent } from './user/admin/payment/payment.component';
import { isLoggedInGuard } from '../Guards/is-logged-in.guard';
import { hasRoleGuard } from '../Guards/has-role.guard';


const routes: Routes = [
    {
        path: "",
        component: PagesComponent,
        children: [
        {
          path:'sign-up',
          component: SignComponent
        },
        {
          path:'login',
          component: AuthComponent
        },
        {
          path:'admin/agent',
          canMatch:[isLoggedInGuard],
          canActivate: [hasRoleGuard],
          data: {
            allowedRoles: [5]
          },
          component: AgentsComponent
        },
        {
          path:'admin/orders',
          canActivate: [hasRoleGuard],
          data: {
            allowedRoles: [5]
          },
          canMatch:[isLoggedInGuard],
          component: OrdersComponent
        },
        {
          path:'admin/payment',
          canMatch:[isLoggedInGuard],
          canActivate: [hasRoleGuard],
          data: {
            allowedRoles: [5]
          },
          component: PaymentComponent
        },
        {
          path:'generator/plants',
          canActivate: [hasRoleGuard],
          data: {
            allowedRoles: [1]
          },
          canMatch:[isLoggedInGuard],
          component: PlantsComponent
        },
        {
          path:'**',
          component: NotFoundComponent
        }
      ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
