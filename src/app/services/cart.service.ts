import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // 1. Aquí se guardan los productos
  private items: any[] = [];

  // 2. Chismosos (Subjects) para avisarle a toda la app si algo cambia
  private cartSubject = new BehaviorSubject<any[]>([]);
  cart$ = this.cartSubject.asObservable();

  private isOpenSubject = new BehaviorSubject<boolean>(false);
  isOpen$ = this.isOpenSubject.asObservable();

  constructor() {}

  // 3. Abre o cierra el panel lateral del carrito
  toggle(state?: boolean) {
    if (state !== undefined) {
      this.isOpenSubject.next(state);
    } else {
      this.isOpenSubject.next(!this.isOpenSubject.value);
    }
  }

  // 4. Agrega un producto nuevo o le suma 1 a la cantidad si ya existe
  addToCart(producto: any) {
    const index = this.items.findIndex((item) => item.product && item.product.id === producto.id);

    if (index !== -1) {
      this.items[index].quantity += 1;
    } else {
      this.items.push({
        product: producto,
        quantity: 1,
      });
    }
    this.cartSubject.next(this.items);
  }

  // 5. Modifica la cantidad desde el panel lateral (los botones de + y -)
  update(productId: any, newQuantity: number) {
    const index = this.items.findIndex((item) => item.product && item.product.id === productId);

    if (index !== -1) {
      if (newQuantity > 0) {
        this.items[index].quantity = newQuantity;
      } else {
        this.items.splice(index, 1); // Borra el ítem si llega a 0
      }
      this.cartSubject.next(this.items);
    }
  }

  // 6. Devuelve la lista completa de lo que hay en el carrito
  getItems() {
    return this.items;
  }

  // 7. Cuenta cuántos artículos hay en total (para la burbuja roja)
  getCount() {
    return this.items.reduce((total, item) => total + item.quantity, 0);
  }

  // 8. Calcula la suma del precio multiplicada por la cantidad
  getTotal() {
    return this.items.reduce((total, item) => {
      return total + item.product.price * item.quantity;
    }, 0);
  }

  // 9. Borra todo después de pagar
  clearCart() {
    this.items = [];
    this.cartSubject.next(this.items);
    return this.items;
  }
}
