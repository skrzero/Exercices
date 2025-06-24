create table realisateur(
    id int auto_increment PRIMARY KEY,
    nom varchar(100),
    prenom varchar(100),
    dateNaissance date
);

create table genre(
    id int auto_increment PRIMARY KEY,
    libelle varchar (100)
);

CREATE TABLE acteur(
    id INT auto_increment PRIMARY KEY,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    dateNaissance date
);

CREATE TABLE film(
    id INT auto_increment PRIMARY KEY,
    titre VARCHAR(255),
    anneeSortie date,
    dureeminutes int,
    noteCritique decimal(3,1),
    paysOrigine VARCHAR(255),
    id_realisateur INT, 
    Foreign Key (id_realisateur) REFERENCES realisateur(id)
);

CREATE Table filmGenre(
    id_film INT,
    id_genre int,
    Foreign Key (id_film) REFERENCES film(id)
);

CREATE TABLE filmActeur(
    id_film int,
    id_acteur INT,
    Foreign Key (id_film) REFERENCES film(id),
    Foreign Key (id_acteur) REFERENCES acteur(id)
);

CREATE TABLE projection(
    id int auto_increment PRIMARY KEY,
    dateHeures datetime,
    salle VARCHAR(255),
    id_film int,
    Foreign Key (id_film) REFERENCES film(id)
);