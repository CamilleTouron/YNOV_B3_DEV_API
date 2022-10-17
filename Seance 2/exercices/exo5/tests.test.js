const exceptions = require("./exceptions");
const library = require("./library");


//exceptions
describe('Test pour exceptions.js : ', () => {
    //callThrowException
    test('Jette une exception', () => {
        expect(() => {
            exceptions.callThrowException();
        }).toThrow();
    });

    //customSum
    test('Jette une exception si A nombre négatif', () => {
        expect(() => {
            exceptions.customSum(-8,8);
        }).toThrow();        
    });
    test('Jette une exception si B nombre négatif', () => {
        expect(() => {
            exceptions.customSum(8,-8);
        }).toThrow();
    });
    test('Jette une exception si A et B nombres négatifs', () => {
        expect(() => {
            exceptions.customSum(-8,-8);
        }).toThrow();

    });
    test('Fonctionne avec A et B nombres positifs', () => {
        expect( exceptions.customSum(1, 2)).toBe(3);
    });

    //complexSum
    test('Jette une exception si A inferieur a B ', () => {
        expect(() => {
            exceptions.complexSum(1,2);
        }).toThrow();
    });
    test('Fonctionne avec A egal a B', () => {
        expect( exceptions.complexSum(2, 2)).toBe(4);
    });
    test('Fonctionne avec A superieur a B', () => {
        expect( exceptions.complexSum(2, 1)).toBe(3);
    });
});

//library
const books = [
    {"id": 1, "title": "Le seigneur des anneaux", "note": 8},
    {id: 2, title: "Harry Potter", note: 10},
    {id: 3, tilte: "Le petit chaperon rouge", note: 12}
];
describe('Test pour library.js : ', () => {
    //getBooks
    test('Retourne books', () => {
        expect(library.getBooks()).toStrictEqual(books); 
    });

    //getBookById
    test('Retourne le book si il existe', () => {
        expect(library.getBookById(2)).toStrictEqual({id: 2, title: "Harry Potter", note: 10}); 
    });
    test('Retourne null si il n existe pas', () => {
        expect(library.getBookById(4)).toEqual(); 
    });

    //addBook
    test('Ajoute le book', () => {
        expect(library.addBook(2,"test",10)).toEqual(true); 
    });
    test('Jette une erreur si un paramettre null', () => {
        expect(() => {
            library.addBook(2,null,10);
        }).toThrow();
    }); 
    test('Jette une erreur si un paramettre null', () => {
        expect(() => {
            library.addBook(null,"test",10);
        }).toThrow();
    });
    test('Jette une erreur si un paramettre null', () => {
        expect(() => {
            library.addBook(2,"test",null);
        }).toThrow();
    });

    //deleteBookById
    test('Jette une exception si id negatif ', () => {
        expect(() => {
            library.deleteBookById(-2);
        }).toThrow();
    });
    test('Supprime si id positif ', () => {
        expect( library.deleteBookById(3)).toEqual(true); 
    });
});