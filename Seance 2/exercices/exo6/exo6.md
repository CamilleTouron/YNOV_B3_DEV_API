# Exercice 6
- Sur postman, ré-utiliser les appels faits a la séance 1 sur `https://quentin-desbin.fr/api/` et écrire pour chaque route disponible des tests dans l'onglet tests
- Attention, la syntaxe n'est peut être pas la même que jest

Routes disponibles : 
- GET /api/

pm.test("Status code is 201", function () {
    pm.response.to.have.status(201);
});


- GET/PUT/DELETE /api/me
GET
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Test", function () {
    var response = pm.response.json()[0];
    var schema = {
        "success": true,
        "data": {
            "_id":{ "type": "string" },
            "uuid": { "type": "string" },
            "created":{ "type": "string" },
            "last_modified": { "type": "string" },
            "firstname":{ "type": "string" },
            "lastname":{ "type": "string" },
            "mail": { "type": "string" },
            "level":  { "type": "number" },
        }
    };
    pm.expect(response).to.have.jsonSchema(schema);
});
- GET /profiles
- GET /levels
- GET /games
- GET /games/{id}