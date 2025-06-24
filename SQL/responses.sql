--   modif fichier 
  update films
    -> set note=8.7
    -> where (id=6);
    -- moyenne
    avg(notes)
    -- maximum
    max(notes)
    -- ajout d'une ligne row 
    insert into films (titre,realisateur,date_de_sortie)
    -- filtre
    select titre from films
    where titre like 'i%';
    -- creation de colonne
    alter table livres
    add colomn prix;
    -- creation de table
    create table personne(
      id int autoincrement primary key,
      nom varchar(100),
      prenom varchar(100)
    );

    create table carteIdentite(
      id int autoincrement primary key,
      numero varchar(20) not null unique,/*unique ne fonctionne que avec one to one */
        personne_id int not null unique,
        FOREIGN key (personne_id) references personne(id)
    );