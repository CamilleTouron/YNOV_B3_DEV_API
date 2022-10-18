const book1 = {
    id: 1,
    titre: "Harry Potter 1",
    date: new Date()
};

const book2 = {
    id: 2,
    titre: "Dune 2",
    date: new Date()
};

const book3 = {
    id: 3,
    titre: "La passe mirroire 4",
    date: new Date()
};

let books = [book1, book2, book3];
//GET BY ID
const getBookById = function (id) {
    let result = null;
    if (id < 0) {
        return {
            error: "id should be positive."
        }
    }

    books.forEach(book => {
        if (id == book.id) {
            result = book;
            return;
        }
    });

    if (!result) {
        return {
            error: id + " is not linked to a book."
        }
    } else {
        return result;
    }
};
//ADD
const addBook = function (id, nom) {
    if (!isIdOK(id)) {
        return {
            error: "id already exist or is not positive or id is null."
        }
    }
    if (!isNomOK(nom)) {
        return {
            error: "a book with this name already exist or name is null"
        }
    }
    const newBook = {
        id: id,
        nom: nom,
        date: new Date()
    };
    books.push(newBook);
    return {
        success: true,
        addedBook: newBook
    }

};
function isIdOK(id) {
    let result = true;
    if (id < 0) {
        result = false;
    }

    books.forEach(book => {
        if (id == book.id) {
            result = false;
            return;
        }
    });

    return result;
}
function isNomOK(nom) {
    let result = true;
    books.forEach(book => {
        if (nom == book.nom) {
            result = false;
            return;
        }
    });
    return result;
}
//DELETE
const deleteBook = function (id) {
    if (id < 0) {
        return {
            error: "id does not exist is not positive or id is null."
        }
    }
    let result = null;
    let i = 0;
    books.forEach(book => {
        if (id == book.id) {
            result = book;
            books.splice(i, 1);
            return;
        }
        i++;
    });
    if (result != null) {
        return {
            success: true,
            deletedBook: result
        }
    }else{
        return {
            error : "The book you ar trying to delete does not exist."
        }
    }


};

exports.books = books;
exports.getBookById = getBookById;
exports.addBook = addBook;
exports.deleteBook = deleteBook;