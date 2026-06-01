import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from "../../services/cart.service";

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  // ...
})
export class ProductCardComponent {
  @Input() product: any;


  constructor(public cart: CartService) {}
}
