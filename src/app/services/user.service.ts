import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpService) { }

  registration(data: any) {
    console.log("data in user service", data);
    return this.http.post('user/Register', data);
  }

  login(data: any) {
    console.log("data in user service", data);
    return this.http.post('user/login', data);
  }

  orderPlaced(book: any) {
    console.log("data in user service");
    return this.http.postCart('order/add', book);
  }

}
