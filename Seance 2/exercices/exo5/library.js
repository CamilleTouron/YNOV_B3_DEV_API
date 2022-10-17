const books = [
    {"id": 1, "title": "Le seigneur des anneaux", "note": 8},
    {id: 2, title: "Harry Potter", note: 10},
    {id: 3, tilte: "Le petit chaperon rouge", note: 12}
];

exports.getBooks = function getBooks() {
    return books;
}

exports.getBookById = function getBookById(id) {
    return books.find(o => o.id === id);
}

exports.addBook = function addBook(id, title, note) {
    if (id != null && title != null && note != null) {
        books.push({id, title, note});
        return true;
    } else {
        throw new Error('All parameters are required');
    }
}

exports.deleteBookById = function deleteBookById(id) {
    const bookIndex = books.findIndex(o => o.id === id);
    if (bookIndex > -1) {
        books.splice(bookIndex, 1);
        return true;
    } else {
        throw new Error('Book not found');
    }
}