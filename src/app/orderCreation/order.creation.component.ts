import { Component } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-creation',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './order.creation.component.html',
  styleUrl: './order.creation.component.css',
})
export class OrderCreation {
  constructor(private activatedRoute: ActivatedRoute) {
    // Use the ActivatedRoute service here
  }
}