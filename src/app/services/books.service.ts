import { Injectable } from '@angular/core';

@Injectable()
export class BooksService {
  books = [
    {
      'id': 1,
      'title': 'Korina',
      'author': {
        'id': 1,
        'givenName': 'Alin',
        'surName': 'Preda',
        'dateOfBirth': '1970-01-01T00:00Z',
        'bio': 'Something about this author. Bla bla bla...'
      },
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
          'title': 'Third One',
          'startPage': 21,
          'numberOfPages': 10
        },
        {
          'title': 'The End',
          'startPage': 31,
          'numberOfPages': 10
        }
      ]
    },
    {
      'id': 2,
      'title': 'The art of truth',
      'author': {
        'id': 2,
        'givenName': 'Don',
        'surName': 'Emilio',
        'dateOfBirth': '1970-01-01T00:00Z',
        'bio': 'Something about this author. Bla bla bla...'
      },
      'publisher': 'You',
      'edition': 'First',
      'ISBN': '000000000001111',
      'publishingDate': '1992-01-01T00:00Z',
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
        }
      ]
    },
    {
      'id': 3,
      'title': 'Carusso',
      'author': {
        'id': 3,
        'givenName': 'Ozun',
        'surName': 'Nuzo',
        'dateOfBirth': '1970-01-01T00:00Z',
        'bio': 'Something about this author. Bla bla bla...'
      },
      'publisher': 'Us',
      'edition': 'Third',
      'ISBN': '000044444440000',
      'publishingDate': '1993-01-01T00:00Z',
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
        }
      ]
    }
  ];

  authors = [
    {
      'id': 1,
      'givenName': 'Vlad',
      'surName': 'Alin',
      'dateOfBirth': '1970-01-01T00:00Z',
      'bio': 'Something about this author. Blablabla...'
    },
    {
      'id': 2,
      'givenName': 'Filip',
      'surName': 'Philips',
      'dateOfBirth': '1970-01-01T00:00Z',
      'bio': 'Data actually changes'
    },
    {
      'id': 3,
      'givenName': 'Doru',
      'surName': 'Connaiseur',
      'dateOfBirth': '1970-01-01T00:00Z',
      'bio': 'Different every time'
    }
  ];

  selectedAuthor;
  constructor() { }

}
