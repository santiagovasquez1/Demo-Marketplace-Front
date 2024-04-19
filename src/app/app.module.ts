import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { PagesComponent } from './pages/pages.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http'; 
import { withFetch } from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AngularMaterialModule } from './angular-material.module';
import { AgentsComponent } from './pages/user/admin/agents/agents.component';
import { UserComponent } from './pages/user/user.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { OrdersComponent } from './pages/user/admin/orders/orders.component';
import { NavAdminComponent } from './shared/nav/nav-admin/nav-admin.component';
import { NavGeneratorComponent } from './shared/nav/nav-generator/nav-generator.component';
import { PlantsComponent } from './pages/user/generator/plants/plants.component';
import { MAT_DATE_LOCALE } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    AgentsComponent,
    OrdersComponent,
    NavGeneratorComponent,
    NavAdminComponent,
    UserComponent,
    PlantsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' } ,
    provideHttpClient(withFetch()),
    provideAnimationsAsync()
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
