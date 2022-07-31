class PrintEditionItem {

    set state(currentState) {
        if (currentState < 0) {
            this._state = 0;
        } if (currentState > 100) {
            this._state = 100;
        }
        this._state = currentState;

    }
    get state() {
        return this._state;
    }
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    fix() {
        this._state = this._state * 1.5
        if (this._state > 100)
            this._state = 100;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book) {
        if (book.state > 30)
            this.books.push(book);
    }


    findBookBy(type, value) {

        for (let book of this.books) {
            if (book[type] == value) {
                return book;
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        debugger;
        let deleted = null;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == bookName) {
                deleted = this.books[i];
                this.books.splice(i, 1);
            }
            return deleted;
        }
        return null;

    }
}