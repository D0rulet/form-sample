import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn, FormArray } from '@angular/forms';

import { Book } from './book';
import { BooksService } from '../services/books.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  bookForm: FormGroup;
  book: Book = new Book();
  bookIndex;
  formIsVisible = false;
  savingTime = true;
  constructor(private _formBuilder: FormBuilder, public _authors: BooksService) { }
  ngOnInit() {
    this.bookForm = this._formBuilder.group({
      title: ['', Validators.required],
      author: ['', Validators.required],
      publisher: '',
      edition: '',
      ISBN: ['', Validators.required],
      publishingDate: '',
      chapters: this._formBuilder.array([ this.buildChapter() ])
    });
  }

  buildChapter(): FormGroup {
    return this._formBuilder.group({
      title: ['', Validators.required],
      startPage: 0,
      numberOfPages: 0
    });
  }

  addChapter(): void {
    this.chapters.push(this.buildChapter());
  }

  patchValues(param) {
    this.bookIndex = param;
    this.resetForm();
    this.savingTime = false;
    this.formIsVisible = true;
    this.bookForm.patchValue({
      title: this._authors.books[param].title,
      author: this._authors.books[param].author.id,
      publisher: this._authors.books[param].publisher,
      edition: this._authors.books[param].edition,
      ISBN: this._authors.books[param].ISBN,
      publishingDate: this._authors.books[param].publishingDate,
      chapters: this._authors.books[param].chapters
    });
    // this.bookForm.setControl('chapters', this._formBuilder.array(this._authors.books[param].chapters || []));
  }

  save() {
    this.formIsVisible = false;
    const newBook = Object.assign({}, this.book, this.bookForm.value);
    console.log(newBook.author);
    newBook.author = this._authors.authors.find(function(elem) {
      // tslint:disable-next-line:triple-equals
      return elem.id == newBook.author;
    });
    this._authors.books.push(newBook);
  }

  addBook() {
    this.formIsVisible = true;
    this.savingTime = true;
  }

  edit() {
    const newBook = Object.assign({}, this.book, this.bookForm.value);
    console.log(newBook.author);
    newBook.author = this._authors.authors.find(function(elem) {
      // tslint:disable-next-line:triple-equals
      return elem.id == newBook.author;
    });
    console.log(newBook, this._authors.books[this.bookIndex]);
    this._authors.books[this.bookIndex] = newBook;
    this.resetForm();
  }

  reset(bool) {
    this.formIsVisible = bool;
    this.savingTime = true;
    this.resetForm();
  }

  get chapters(): FormArray {
    return <FormArray>this.bookForm.get('chapters');
  }

  testData() {
    this.bookForm.patchValue({
      'title': 'All about something',
      'author': 1,
      'publisher': 'Me',
      'edition': 'First',
      'ISBN': '000000000000000',
      'publishingDate': '1990-01-01T00:00Z',
      'chapters': [
        {
          'title': 'First One',
          'startPage': 1,
          'numberOfPages': 10
        },
        {
          'title': 'Second One',
          'startPage': 11,
          'numberOfPages': 10
        },
        {
          'title': 'Third One',
          'startPage': 21,
          'numberOfPages': 10
        },
        {
          'title': 'The End',
          'startPage': 31,
          'numberOfPages': 10
        }]
      });

  }

  resetForm(){
    this.bookForm.reset();
  }
}
