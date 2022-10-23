const reviews = require("./reviews");
let user1 = {
    id: 1,
    nom: "Alan",
    prenom: "Lepetit"
};

let user2 = {
    id: 2,
    nom: "Damien",
    prenom: "Lelapin"
};

let user3 = {
    id: 3,
    nom: "Alice",
    prenom: "Anais"
};

let users = [user1, user2, user3];

//GET BY ID
const getUserById = function (id) {
    let result = null;
    if (id < 0) {
        return {
            status: 400,
            error: "id should be positive."
        }
    }

    users.forEach(user => {
        if (id == user.id) {
            result = user;
            return;
        }
    });

    if (!result) {
        return {
            status: 404,
            error: id + " is not linked to an user."
        }
    } else {
        return {
            status: 200,
            content: result
        }
    }
};

//ADD
const addUser = function (id, nom, prenom) {
    if (!isIdOK(id)) {
        return {
            status: 400,
            error: "id already exist or is not positive or id is null."
        }
    }
    if (!isNomsOK(nom, prenom)) {
        return {
            status: 400,
            error: "a user with this name already exist. Check http://localhost:3000/librairie/users/" + getIdByFullName(nom, prenom)
        }
    }
    const newUser = {
        id: id,
        nom: nom,
        prenom: prenom
    };
    users.push(newUser);
    return {
        status: 201,
        addedUser: newUser
    }

};
function isIdOK(id) {
    let result = true;
    if (id < 0) {
        result = false;
    }

    users.forEach(user => {
        if (id == user.id) {
            result = false;
            return;
        }
    });
    return result;
}
function isNomsOK(nom, prenom) {
    let result = true;
    users.forEach(user => {
        if (nom == user.nom && prenom == user.prenom) {
            result = false;
            return;
        }
    });

    return result;
}
function getIdByFullName(nom, prenom) {
    let result = null;

    users.forEach(user => {
        if (nom == user.nom && prenom == user.prenom) {
            result = user.id;
            return;
        }
    });

    return result;
}

//DELETE
const deleteUser = function (id) {
    if (id < 0) {
        return {
            status: 400,
            error: "id should be positive."
        }
    }
    let loopContinue=true;
    const lenghtAtStart=reviews.reviews.length;
    let j=0;
    while(loopContinue){
        if(reviews.reviews[j] && reviews.reviews[j].userId == id ){
            reviews.reviews=reviews.reviews.slice(j,1);
            console.log(reviews.reviews.toString());
        }
        if(lenghtAtStart==j){
            loopContinue=false;
        }
        j++;
    }
    let result = null;
    let i = 0;
    users.forEach(user => {
        if (id == user.id) {
            result = user;
            users.splice(i, 1);
            return;
        }
        i++;
    });
    if (result != null) {
        return {
            status: 200,
            deletedUser: result
        }
    } else {
        return {
            status: 404,
            error: "The user you are trying to delete does not exist."
        }
    }


};

exports.users = users;
exports.getUserById = getUserById;
exports.getIdByFullName = getIdByFullName;
exports.addUser = addUser;
exports.deleteUser=deleteUser;