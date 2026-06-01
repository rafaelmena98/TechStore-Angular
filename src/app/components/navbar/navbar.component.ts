import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.css',
})
export class NavbarComponent {
  count = 0;
  isCartOpen = false;
  cartItems: any[] = [];
  totalAmount = 0;

  constructor(public cart: CartService) {
    this.cart.cart$.subscribe(() => {
      this.count = this.cart.getCount();


      this.cartItems = this.cart.getItems();
      this.totalAmount = this.cart.getTotal();
    });
  }

  toggleCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
