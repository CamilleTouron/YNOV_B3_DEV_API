const users = require("./users");
const books = require("./books");
const review1 = {
    id:1,
    userId: 1,
    bookId: 3,
    note: "Nickel.",
    date: new Date()
};

const review2 = {
    id:1,
    userId: 2,
    bookId: 2,
    note: "Super.",
    date: new Date()
};

const review3 = {
    id:1,
    userId: 3,
    bookId: 1,
    note: "Bof.",
    date: new Date()
};

let reviews = [review1, review2, review3];


//ADD
const addReview = function (userId, bookId, note) {
    if (isUserIdOk(userId)) {
        return {
            error: "userId does not exist"
        }
    }
    if (isBookIdOk(bookId)) {
        return {
            error: "bookId does not exist"
        }
    }
    if (!note) {
        return {
            error: "note is null"
        }
    }
    const newReview = {
        userId: userId,
        bookId: bookId,
        note: note,
        date: new Date()
    };
    reviews.push(newReview);
    return {
        success: true,
        addedReview: newReview
    }

};
function isUserIdOk(userId) {
    let result = true;
    users.users.forEach(user => {
        if (userId == user.id) {
            result = false;
            return;
        }
    });
    console.log(result);
    return result;
}
function isBookIdOk(bookId) {
    let result = true;
    books.books.forEach(book => {
        if (bookId == book.id) {
            result = false;
            return;
        }
    });
    console.log(result);
    return result;
}
//DELETE
const deleteReview = function (id) {
        if (id && id < 0) {
            return {
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
                success: true,
                deletedReview: result
            }
        } else {
            return {
                error: "The review you are trying to delete does not exist."
            }
        }


    };

    exports.reviews = reviews;
    exports.addReview = addReview;
    exports.deleteReview = deleteReview;