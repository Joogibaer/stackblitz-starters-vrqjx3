// app.component.ts
import { Component } from '@angular/core';
import { NavigationComponent } from './app/navigation/navigation.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <app-navigation></app-navigation>
    <router-outlet></router-outlet>
  `,
  standalone: true,
  imports: [NavigationComponent, RouterOutlet],
})
export class AppComponent {}