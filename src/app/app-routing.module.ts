import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './pages/user/user.component';
import { AgentsComponent } from './pages/user/admin/agents/agents.component';
import { OrdersComponent } from './pages/user/admin/orders/orders.component';
import { PlantsComponent } from './pages/user/generator/plants/plants.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { SignComponent } from './pages/sign/sign.component';
import { AuthRoutingModule } from './auth/auth.routing';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    AuthRoutingModule,
    PagesRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
