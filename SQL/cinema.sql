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

CREATE Table film(
    id int auto_increment  PRIMARY KEY,
    titre varchar(255) NOTNULL,
    note decimal(3,1) check (note between 0 and 10),
    statut varchar(255) DEFAULT 'actif',
);

alter table acteur
    modify nom varchar(255) not null,
    modify prenom varchar(255) not null,
    modify dateNaissance date not null;

alter table film
    modify titre varchar(255) not null,
    modify anneeSortie date not null,
    modify dureeminutes int not null,
    modify noteCritique decimal(3,1) check(noteCritique between 0 and 10),
    modify paysOrigine varchar(255) not null unique;

alter table films 
    modify titre varchar(255) not null,
    modify annee_sortie int not null,
    modify genre varchar(100) not null,
    modify duree_minutes int not null,
    modify note decimal(3,1) check(note between 0 and 10);

alter table genre
    modify libelle varchar(255) not null;

alter table projection
    modify dateHeures datetime not null,
    modify salle varchar(255) unique not null,
    modify id_film int unique;

alter table realisateur
    modify nom varchar(255) not null,
    modify prenom varchar(255) not null,
    modify dateNaissance date not null;


create index idx_nom on film (titre);
create index idx_salle on projection (salle);