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