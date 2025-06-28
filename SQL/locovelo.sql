create database locovelo;
use locovelo;

CREATE TABLE client (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    email VARCHAR(100),
    date_inscription date
);
load data infile 'C:/ProgramData/MySQL/MySQL Server 8.4/Uploads/clients.csv'
into table client
fields terminated by ',' 
lines terminated by '\n'
ignore 1 rows; 

CREATE TABLE velo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    marque VARCHAR(255),
    type VARCHAR(255),
    taille int,
    tarif_horaire INT,
    etat VARCHAR(255),
    disponible varchar(10)
);

load data infile 'C:/ProgramData/MySQL/MySQL Server 8.4/Uploads/velo.csv'
into table velo
fields terminated by ',' 
lines terminated by '\n'
ignore 1 rows;

CREATE TABLE location (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_client INT,
    id_velo INT,
    dateheure_debut DATE,
    dateheure_fin DATE,
    montant_total INT
    FOREIGN KEY (id_client) REFERENCES client(id)
    FOREIGN KEY (id_velo) REFERENCES velo(id)
);

load data infile 'C:/ProgramData/MySQL/MySQL Server 8.4/Uploads/location.csv'
into table location
fields terminated by ',' 
lines terminated by '\n'
ignore 1 rows;

select count(disponible) as "velo disponible" from velo
    where disponible = 'oui';

select count(id_client) as "location faite" from location
    WHERE id_client = 1;

INSERT INTO location (id,id_client,id_velo,dateheure_debut,dateheure_fin,montant_total)
    VALUES
    (6,1,2,'2025-02-15','2025-02-16',70);

select count(*) as "total de locations" from location;

select count(disponible) as "location en cours" from velo
    WHERE disponible='non';

select sum(montant_total) as 'chiffre d\'affaire' from location;

SELECT DATE_FORMAT(dateheure_debut, '%Y-%m') AS mois, SUM(montant_total) AS revenu_total FROM location
GROUP BY DATE_FORMAT(dateheure_debut, '%Y-%m')
ORDER BY mois;

create index idx_client on location (id_client);
create index idx_date on location (dateheure_fin);