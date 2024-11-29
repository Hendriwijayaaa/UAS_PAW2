import { Injectable } from '@angular/core';
import { Product } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Produk A',
      price: 15000,
      description: 'Deskripsi Produk A',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      name: 'Produk B',
      price: 25000,
      description: 'Deskripsi Produk B',
      image: 'https://via.placeholder.com/150'
    }
    // Tambahkan produk lain sesuai kebutuhan
  ];

  constructor() {}

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(product => product.id === id);
  }
}
