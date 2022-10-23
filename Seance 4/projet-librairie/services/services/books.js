const book1 = {
    id: 1,
    titre: "Harry Potter 1",
    date: "1997-06-26"
};

const book2 = {
    id: 2,
    titre: "Dune 2",
    date: "1972-01-01"
};

const book3 = {
    id: 3,
    titre: "La passe mirroire 4",
    date: "2019-11-28"
};

let books = [book1, book2, book3];

//GET BY ID
const getBookById = function (id) {
    let result = null;
    if (id < 0) {
        return {
            status : 400,
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
            status : 404,
            error: id + " is not linked to a book."
        }
    } else {
        return {
            status : 200,
            content : result
        }
    }
};
//ADD
const addBook = function (id, nom, date) {
    if (!isIdOK(id)) {
        return {
            status : 400,
            error: "id already exist or is not positive or id is null."
        }
    }
    if (!isNomOK(nom)) {
        return {
            status : 400,
            error: "a book with this name already exist or name is null"
        }
    }
    if (!isDateOK(date)) {
        return {
            status : 400,
            error: "date is incorrect"
        }
    }
    const newBook = {
        id: id,
        nom: nom,
        date: formatDate(date)
    };
    books.push(newBook);
    return {
        status : 201,
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

    return {
        status : 200,
        content : result
    }
}
function isNomOK(nom) {
    let result = true;
    books.forEach(book => {
        if (nom == book.nom) {
            result = false;
            return;
        }
    });
    return {
        status : 200,
        content : result
    }
}
function isDateOK(date){
    let result = true;
    const time = new Date(date);
    if(isNaN(time.getTime()) || time.getTime() < 0 || time.getTime() === 0 || !time){
        result = false;
        return 
    }
    return result;
}
function formatDate(dateReq) {
    console.log(dateReq*1000);
    var d = new Date(dateReq*1000),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();
        console.log(d);

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}
//DELETE
const deleteBook = function (id) {
    if (id < 0) {
        return {
            status : 400,
            error: "id should be positive."
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
            status : 200,
            success: true,
            deletedBook: result
        }
    }else{
        return {
            status : 404,
            error : "The book you ar trying to delete does not exist."
        }
    }


};

exports.books = books;
exports.getBookById = getBookById;
exports.addBook = addBook;
exports.deleteBook = deleteBook;