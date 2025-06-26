CREATE DATABASE IF NOT EXISTS tp_agregats;
USE tp_agregats;

CREATE TABLE utilisateur (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    age INT,
    email VARCHAR(100)
);

INSERT INTO utilisateur (nom, prenom, age, email) VALUES
('Durand', 'Lucie', 25, 'lucie.durand@mail.com'),
('Martin', 'Hugo', NULL, 'hugo.martin@mail.com'),
('Bernard', 'Claire', 34, NULL),
('Petit', 'LÃ©a', 29, 'lea.petit@mail.com'),
('Lemoine', 'Nina', NULL, NULL);

CREATE TABLE commande (
    id INT PRIMARY KEY AUTO_INCREMENT,
    utilisateur_id INT,
    montant DECIMAL(10,2),
    date_commande DATE,
    FOREIGN KEY (utilisateur_id) REFERENCES utilisateur(id)
);

INSERT INTO commande (utilisateur_id, montant, date_commande) VALUES
(1, 120.50, '2024-01-15'),
(2, NULL, '2024-02-01'),
(1, 300.00, '2024-02-10'),
(3, 250.00, '2024-03-01'),
(4, 100.00, NULL);

show tables;
describe utilisateur;
select count(*) from utilisateur;
select count(distinct email) from utilisateur;
select avg(age) from utilisateur;
select min(age) from utilisateur;
select max(age) from utilisateur;
select count(*) from commande;
select avg(montant) from commande;
select count(montant) from commande;
select max(date_commande) from commande;
select count( distinct utilisateur_id ) from commande;

select utilisateur_id ,count(*) as "nombre de commande" from commande
group by utilisateur_id
having count(*)>1;

load data infile 'C:/ProgramData/MySQL/MySQL Server 8.4/Uploads/film.csv'
into table film
fields terminated by ','
lines terminated by '\n'
ignore 1 rows;

load data infile 'C:/ProgramData/MySQL/MySQL Server 8.4/Uploads/realisateur.csv'
into table realisateur
fields terminated by ','
lines terminated by '\n'
ignore 1 rows;

load data infile 'C:/ProgramData/MySQL/MySQL Server 8.4/Uploads/genre.csv'
into table genre
fields terminated by ','
lines terminated by '\n'
ignore 1 rows;


load data infile 'C:/ProgramData/MySQL/MySQL Server 8.4/Uploads/projection.csv'
into table projection
fields terminated by ','
lines terminated by '\n'
ignore 1 rows;