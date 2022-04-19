import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import {Routes, RouterModule } from '@angular/router'

import {FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagosComponent } from './pagos/pagos.component';
import { FormPagosComponent } from './pagos/form-pagos.component';

const routes:Routes=[
  { path:'', redirectTo:'/pagos', pathMatch:'full'},
  { path:'pagos', component:PagosComponent},
  { path:'pagos/form', component:FormPagosComponent},
  

]


@NgModule({
  declarations: [
    AppComponent,
    PagosComponent,
    FormPagosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


