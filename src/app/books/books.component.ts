import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  _booksService: BooksService;
  showDetails = false;
  whichBook;
  constructor(_booksService: BooksService) { this._booksService = _booksService; }
  @Output() edtiThisBook = new EventEmitter<number>();

  sendBookIndex(index) {
    this.edtiThisBook.emit(index);
  }

  ngOnInit() {
  }
  details(index) {
    this.whichBook = index;
    this.showDetails = !this.showDetails;
    console.log(index);
  }
  delete(index) {
    this.whichBook = index;
    this._booksService.books.splice(this.whichBook, 1);
  }
}
