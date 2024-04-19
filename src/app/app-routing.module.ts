import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './pages/user/user.component';
import { AgentsComponent } from './pages/user/admin/agents/agents.component';
import { OrdersComponent } from './pages/user/admin/orders/orders.component';
import { PlantsComponent } from './pages/user/generator/plants/plants.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'user',
    component: UserComponent
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
