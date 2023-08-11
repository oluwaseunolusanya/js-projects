//Small collection of Javascripts books.
let books = [
    {
        title: "Speaking JavaScript",
        author: "Axel Rauschmayer",
        pages: 460 
    },
    {
        title: "Programming JavaScript",
        author: "Eric Elliot",
        pages: 254
    },
    {
        title: "Understanding ECMAScript 6",
        author: "Nic Zakas",
        pages: 352
    }    
];
//console.log(books[0].title);

let newbook = {
    title: "Learning JavaScript Design Patterns",
    author: "Addy Osmani",
    pages: 254
};
books.push(newbook);

console.log(books.length);
for(let book of books){
    console.log(book.title);
};

let favourites = books.slice(-2);
console.log(favourites.length);
console.log(favourites);