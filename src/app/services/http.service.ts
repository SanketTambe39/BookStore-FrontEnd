import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  token: any;
  baseUrl = "http://localhost:8082/";

  constructor(private http: HttpClient) { }

  postCart(url: string, data: any) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    this.token = localStorage.getItem('token')
    console.log("getting token ", this.token);
    console.log("url is:", this.baseUrl + url);
    console.log("data in http", data);
    return this.http.post(this.baseUrl + url, data, options)
  }

  post(url: string, data: any) {
    console.log("url is:", this.baseUrl + url);
    console.log("data in http", data);
   return this.http.post(this.baseUrl + url, data);
  }

  get(url: string) {
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      })
    }
    this.token = localStorage.getItem('token')
    console.log("getting token ", this.token);
    console.log("options in httpservice ", options);
    return this.http.get(this.baseUrl + url, options);
  }


}
