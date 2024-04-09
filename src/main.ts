// main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { provideRouter, Router, RouterModule } from '@angular/router';
import { routes } from './app/app.routes';
import { NavigationComponent } from './app/navigation/navigation.component';
import { OrderCreation } from './app/orderCreation/order.creation.component';
import { AppComponent } from './app.component';
import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
  ],
}).catch((err) => console.error(err));