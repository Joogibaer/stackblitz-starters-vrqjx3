// app.routes.ts
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OrderCreation } from './orderCreation/order.creation.component';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'orderCreation', component: OrderCreation },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];