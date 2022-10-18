const review1 = {
    userId: 1,
    bookId: 3,
    note: "Nickel.",
    date: new Date()
};

const review2 = {
    userId: 2,
    bookId: 2,
    note: "Super.",
    date: new Date()
};

const review3 = {
    userId: 3,
    bookId: 1,
    note: "Bof.",
    date: new Date()
};

let reviews = {review1,review2,review3};

exports.reviews = reviews;