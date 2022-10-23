const users = require("./users");
const books = require("./books");
const review1 = {
    id:1,
    userId: 1,
    bookId: 3,
    note: 10
};

const review2 = {
    id:1,
    userId: 2,
    bookId: 2,
    note: 7
};

const review3 = {
    id:1,
    userId: 3,
    bookId: 1,
    note: 4
};

let reviews = [review1, review2, review3];


//ADD
const addReview = function (userId, bookId, note) {
    if (!isUserIdOk(userId)) {
        return {
            status : 404,
            error: "userId does not exist"
        }
    }
    if (!isBookIdOk(bookId)) {
        return {
            status : 404,
            error: "bookId does not exist"
        }
    }
    if (!isNoteOK(note)) {
        return {
            status : 400,
            error: "note is invalid, note should be an integer between 0 and 10 (both included)"
        }
    }
    const newReview = {
        userId: userId,
        bookId: bookId,
        note: note
        };
    reviews.push(newReview);
    return {
        status : 201,
        success: true,
        addedReview: newReview
    }

};
function isUserIdOk(userId) {
    let result = false;
    users.users.forEach(user => {
        if (userId == user.id) {
            result = true;
            return;
        }
    });
    return result;
}
function isBookIdOk(bookId) {
    let result = false;
    books.books.forEach(book => {
        if (bookId == book.id) {
            result = true;
            return;
        }
    });
    return result;
}
function isNoteOK(note){
    let result = false;
    if(Number.isInteger(note) || (note<0 && note>10)){
        result = true;
    }
    return result;
}
//DELETE
const deleteReview = function (id) {
        if (id && id < 0) {
            return {
                status : 400,
                error: "id is not positive or id is null."
            }
        }
        let result = null;
        let i = 0;
        reviews.forEach(review => {
            if (id == review.id) {
                result = review;
                console.log()
                reviews.splice(i, 1);
                return;
            }
            i++;
        });
        if (result != null) {
            return {
                status : 200,
                success: true,
                deletedReview: result
            }
        } else {
            return {
                status : 404,
                error: "The review you are trying to delete does not exist."
            }
        }
    };

    exports.reviews = reviews;
    exports.addReview = addReview;
    exports.deleteReview = deleteReview;