export class Book {
        constructor(public id ?: number,
            public title?: string,
            public author?: Object,
            public publisher?: string,
            public edition?: string,
            public ISBN?: string,
            public publishingDate?: Date,
            public chapters?: Object) { }
    }
