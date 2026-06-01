import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.css'

})
export class CartComponent {

  public cart = inject(CartService);


  checkout() {
    alert('¡Procesando tu compra! 🚀');
    this.cart.clearCart(); // Vaciamos el carrito
    this.cart.toggle(false); // Cerramos el panel lateral
  }
}
