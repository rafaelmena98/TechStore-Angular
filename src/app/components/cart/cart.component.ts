import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.css'],
})
export class CartComponent implements OnInit {
  cartItems: any[] = [];

  constructor(public cart: CartService) {}

  ngOnInit(): void {
    this.cart.cart$.subscribe((items: any[]) => {
      this.cartItems = items;
    });
  }
}
