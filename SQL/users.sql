create user 'admin'@'localhost' identified by 'admin123';
create user 'lecteur'@'localhost' identified by 'lecteur456';
create user 'gestionnaire'@'localhost' identified by 'gest789';
grant all privileges on cineclub.* to 'admin'@'localhost';
grant select on cineclub.* to 'lecteur'@'localhost';
grant insert,update,delete on cineclub.film to 'gestionnaire'@'localhost';
create role 'role_lecteur';
create role 'role_gestionnaire';
grant select on cineclub.* to 'role_lecteur';
grant insert,update,delete on cineclub.film to 'role_gestionnaire';
grant insert,update,delete on cineclub.projection to 'role_gestionnaire';
grant 'role_lecteur' to 'lecteur'@'localhost';
grant 'role_gestionnaire' to 'gestionnaire'@'localhost';
set default role 'role_lecteur' to 'lecteur'@'localhost';
set default role 'role_gestionnaire' to 'gestionnaire'@'localhost';
show grants for 'lecteur'@'localhost';
show grants for 'gestionnaire'@'localhost';
mysql -u lecteur -p 

