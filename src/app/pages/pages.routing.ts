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
          component: LoginComponent
        },
        {
          path:'admin/agent',
          component: AgentsComponent
        },
        {
          path:'admin/orders',
          component: OrdersComponent
        },
        {
          path:'generator/plants',
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
