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

select age , avg(salaire) as salaire_moyen from employes 
group by age 
having avg(salaire)>6000; /* having equivalent a where une condition*/

load data infile 'C:/ProgramData/MySQL/MySQL Server 8.4/Uploads/film.csv'
into table film
fields terminated by ',' 
lines terminated by '\n'
ignore 1 rows; 

-- jointure
select * from employes
inner join departement 
on employes.dep = departement.id;

-- left join retourne toute les ligne du tableau de gauche meme si elle sont null
select * from table1
left join table2 
on table1.colonne = table2.colonne;

-- right join same shit
select * from table1
right join table2 
on table1.colonne = table2.colonne;

-- full join recupere toute les donnees quil y ai correspondance ou pas 
select * from table1 
full outer join table2
on table1.colonne= table2.colonne;

-- union= left join + right join
select e.nom,e.profession,d.nom_dep from employes as e
left join departement as d on e.dep = d.id_dep

union

select e.nom,e.profession,d.nom_dep from employes e /*on peut utiliser un espace a la place de AS pour renommer une element*/
right join departement as d on e.dep =d.id.dep;

-- cross join retourne toute les combinaison de ligne entre 2 tables 
-- ex si table 1 contient 3 lignes et table 2 4 lignes cross join renverra 3x4 =12 lignes

select * from table1
cross join table2;
-- 

-- sous requete select 01/07
select nom,
(select avg(salaire)from employes as e)
from employes

-- sous requete from
select dept,moyenne from(
    select dep as dept, avg(salaire) as moyenne from employes
    group by dep
) as dep_stats;

-- sous requete where
select nom from employes
where salaire >(
    select avg(salaire)from employes);

-- creation user mysql
create user 'jean'@'localhost' identified by 'motdepasse'

-- suppression user
drop user 'jean'@'localhost'

-- privileges grant
grant select, insert on entreprise.* to 'jean'@'localhost';

-- supprimer des privilege
revoke insert on entreprise.* from 'jean'@'localhost';

-- voir les droit
show grants for 'jean'@'localhost';

-- revoquer tout les privileges
revoke all privileges , grant option from 'jean'@'localhost';

-- creation de role
create role 'lecteur';

-- attribuer des droit a un role
grant select on entreprise.* to 'lecteur';

-- assigner un role a un user
grant 'lecteur' to 'jean'@'localhost';

-- role par default
set default role 'lecteur' to 'jean'@'localhost';
--  insert
INSERT INTO location (id,id_client,id_velo,dateheure_debut,dateheure_fin,montant_total)
    VALUES
    (6,1,2,'2025-02-15','2025-02-16',70);

INSERT INTO utilisateur (nom, prenom, age, email) VALUES
('Durand', 'Lucie', 25, 'lucie.durand@mail.com'),
('Martin', 'Hugo', NULL, 'hugo.martin@mail.com'),
('Bernard', 'Claire', 34, NULL),
('Petit', 'LÃ©a', 29, 'lea.petit@mail.com'),
('Lemoine', 'Nina', NULL, NULL);













