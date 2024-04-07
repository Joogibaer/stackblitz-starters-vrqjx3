import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './home/home.component';
import { OrderCreation } from './orderCreation/order.creation.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'orderCreation', component: OrderCreation },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
