class Bookshelf {
	constructor() {
		this.favoriteBooks = [];
	}

	// TODO: define methods `addFavoriteBook(..)`
	addFavoriteBook(bookName) {
		if (!bookName.includes("Great")) {
			this.favoriteBooks.push(bookName);
		}
	}
	
	
	// and `printFavoriteBooks()`
	printFavoriteBooks() {
		console.log(`Favorite Books: ${ String(this.favoriteBooks.length) }`);
		for (let bookName of this.favoriteBooks) {
			console.log(bookName);
		}
	}
}




function loadBooks(theBookshelf) {
	// TODO: call fakeAjax( .. );
	fakeAjax(BOOK_API, function onBooks(bookNames){
		for( let bookName of bookNames){
			// implicit binding
			theBookshelf.addFavoriteBook(bookName);
		}
		// call 
		theBookshelf.printFavoriteBooks();
	});
}

var BOOK_API = "https://some.url/api";

var myBooks = new Bookshelf();

loadBooks(myBooks);


// ***********************

// NOTE: don't modify this function at all
function fakeAjax(url,cb) {
	setTimeout(function fakeLoadingDelay(){
		cb([
			"A Song of Ice and Fire",
			"The Great Gatsby",
			"Crime & Punishment",
			"Great Expectations",
			"You Don't Know JS"
		]);
	},500);
}
