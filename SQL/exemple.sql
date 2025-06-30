CREATE Table film(
    id int auto_increment  PRIMARY KEY,
    titre varchar(255) NOTNULL,
    note decimal(3,1) check (note between 0 and 10),
    statut varchar(255) DEFAULT 'actif',
);
-- constraint

    NOT NULL - Ensures that a column cannot have a NULL value
    UNIQUE - Ensures that all values in a column are different
    PRIMARY KEY - A combination of a NOT NULL and UNIQUE. Uniquely identifies each row in a table
    FOREIGN KEY - Prevents actions that would destroy links between tables
    CHECK - Ensures that the values in a column satisfies a specific condition
    DEFAULT - Sets a default value for a column if no value is specified
    CREATE INDEX - Used to create and retrieve data from the database very quickly

create Table client(
    id INT PRIMARY KEY,
    nom TEXT
);

create Table commande(
    id INT PRIMARY KEY,
    id_client int,
    date_commande DATE,
    Foreign Key (id_client) REFERENCES client(id)
);
create index idx_idClient on commande(id_client);

select count(*) from employes; /* compte chaque employé*/
select count(distinct age) from employes ; /* ne compte pas les doublons */

select sum(salaire) from employes;
select sum(distinct age) from employes;

select avg(salaire) from employes;

select min(salaire) from employes;
select max(salaire) from employes;

select age from employes
group by colonne;

select age, count(*) as "nombre d'employes" from employes group by age;
-- selectionne la colonne age compte la totalité et creer une nouvelle colonne
-- as change le nom de sortie from employes group by regroupe la valeur

select age , avg(salaire) as salaire_moyen from employes group by age 
having avg(salaire)>6000; /* having equivalent a where une condition*/

load data infile 'C:/ProgramData/MySQL/MySQL Server 8.4/Uploads/clients.csv'
into table client
fields terminated by ',' 
lines terminated by '\n'
ignore 1 rows; 