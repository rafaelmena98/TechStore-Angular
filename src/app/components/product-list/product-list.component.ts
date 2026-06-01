import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  private cartService = inject(CartService);

  productos = [
    {
      id: 14,
      title: 'Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor',
      price: 999.99,
      description:
        'Rendimiento bestial para tus juegos first person shooter. La ventaja competitiva que necesitas con 144Hz y 1ms de respuesta.',
      image: '/images/monitor.png',
      category: 'electronics',
    },
    {
      id: 12,
      title: 'WD 4TB Gaming Drive Portable External Hard Drive',
      price: 114.0,
      description:
        'Potencia extrema y espacio de sobra para renderizado y gaming pesado. Lleva tu biblioteca a donde quieras.',
      image: '/images/disco.png',
      category: 'electronics',
    },
    {
      id: 10,
      title: 'SanDisk SSD PLUS 1TB Internal SSD',
      price: 109.0,
      description:
        'Actualización fácil para un arranque más rápido. El equilibrio perfecto entre rendimiento y fiabilidad para tu setup.',
      image: '/images/ssd.png',
      category: 'electronics',
    },
  ];

  agregarAlCarrito(producto: Product) {
    this.cartService.addToCart(producto);
  }
}
