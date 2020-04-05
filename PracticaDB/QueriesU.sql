SELECT * FROM uniminutodb.persons;
CREATE VIEW uniminutodb.personsfull AS
SELECT *, TIMESTAMPDIFF(YEAR,persons.birthdate,CURDATE()) as age FROM uniminutodb.persons;
SELECT * FROM uniminutodb.personsfull WHERE personsfull.age = 20;
SELECT * FROM uniminutodb.personsfull WHERE personsfull.gender = 'M';
SELECT * FROM uniminutodb.personsfull WHERE personsfull.name LIKE '%Mercedes';
SELECT * FROM uniminutodb.personsfull WHERE personsfull.surname LIKE '%Carey' ;
SELECT * FROM uniminutodb.personsfull WHERE personsfull.name LIKE '%Octavia%' AND personsfull.gender = 'F';
