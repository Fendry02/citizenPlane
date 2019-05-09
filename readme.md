TECHNICAL TEST CITIZENPLANE

Used Stack: 
 - Postgresql
 - HapiJs
 - Knex.js/Objection.js

Prerequisite:
 - BDD Postgresql up
 - Table 'User', 'Flight' and 'Booking' (properties are findable in model (jsonSchema))
 - Sequence for id of each table
 - Configuration are done in 'conf' repository to connect to the BDD
 - At least one user created

Creation of user are not handle in this test.

Improvments: 
 - Global error handling (BDD, validation, js)
 - Date format validation when inserting or querying
 - Put status and id verification in hook (beforeInsert ?)
 - Separate handler of routing in different files
 - Use lodash to handle tableau/objet in helper ?
 - Handle lowercase, uppercase in query parameters