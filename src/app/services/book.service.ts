import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpService: HttpService) { }

  getBook() {
    return this.httpService.get('book/all');
  }

  AddCart(data: any) {
    return this.httpService.postCart('cart/add', data);
  }

  getCartItems() {
    return this.httpService.get('cart/get');
  }

  removeCartItem(data: any) {
    console.log("data in remove item", data);
    return this.httpService.postCart('cart/remove/' + data, {});
  }

  updateQuantity(data: any) {
    console.log("data in bookservice", data)
    return this.httpService.postCart('cart/update', data);
  }

}
