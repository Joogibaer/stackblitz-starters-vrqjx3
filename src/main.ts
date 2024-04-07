import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { HomeComponent } from './app/home/home.component';
import { NavigationComponent } from './app/navigation/navigation.component';

import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent, NavigationComponent],
  template: `
    <app-navigation></app-navigation>
    <div class="content"><app-home></app-home></div>
    <h1>Hello from {{ name }}!</h1>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
