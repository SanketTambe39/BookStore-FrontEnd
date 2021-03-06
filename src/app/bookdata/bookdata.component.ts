import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-bookdata',
  templateUrl: './bookdata.component.html',
  styleUrls: ['./bookdata.component.css']
})
export class BookdataComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  booksArray: Array<any> = [];
  wishlist: Array<any> = [];
  books: Array<any> = [];
  bag : any;

  ngOnInit( ): void {
    this.getAllBooks();
  }

  getAllBooks() {
    this.bookService.getBook().subscribe((response: any) => {
      console.log(response);
      this.booksArray = response['data']
      console.log(" books array ", this.booksArray);
    }) 
  }

  addcart(book: any) {
    book.addedToCart = false;
    for (let b of this.booksArray) {
      if (book.product_id == b.product_id) {
        book.addedToCart = true;
      }
    }
    this.bookService.AddCart(book).subscribe((res) => {
      console.log("AddBookSucess", res)
      this.getCartItems();
      //this.bag=this.cartservice.getCartItems();
      //console.log("value in add to cart component",this.bag);

    })
  }


  getCartItems() {
    this.bookService.getCartItems().subscribe((response: any) => {
      console.log(response);
      this.books = response['result']
      console.log("booksArray", this.books);
      console.log("length of array", this.books.length)
      this.bag = this.books.length;
      console.log("bag value in get components:", this.bag)
    })

  }

  review() {
    return Math.floor(Math.random() * (5 - 1) + 1)
  }

}

