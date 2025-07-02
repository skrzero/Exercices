--1 Afficher le nom complet de l’étudiant et l’intitulé de sa formation.
select s.first_name,s.last_name,c.course_name  from student as s
inner join course as c
on s.course_id = c.course_id;
-- 2 Lister les étudiants inscrits en "Data Analyst".
-- on peut faire appel a tout les fichier qui sont contenu dans les 2 tables vu quil y a inner join 
select *  from student as s
inner join course as c
on c.course_id = s.course_id
where c.course_name like 'Data Analyst';
-- 3 Lister les examens avec le prénom, nom de l’étudiant, le nom du cours, la note et la date.
select s.first_name,s.last_name,c.course_name,e.score,e.exam_date  from student as s
inner join course as c
on s.course_id = c.course_id
inner join exam as e
on s.student_id = exam_id;
--4 fficher tous les étudiants avec leur formation, y compris ceux sans formation.
select s.first_name,s.last_name,c.course_name from student as s
left join course as c
on s.course_id = c.course_id;
-- 5 Afficher les étudiants sans formation
select s.first_name,s.last_name from student as s
left join course as c
on c.course_id = s.course_id
where c.course_id is NULL;
-- 6 Afficher tous les étudiants avec leurs examens, même s’ils n’en ont pas passé
select s.first_name,s.last_name,e.exam_type,e.exam_date from student as s
left join exam as e
on s.student_id = e.student_id
where e.exam_date is not null;
-- 7 Afficher toutes les formations même si aucun étudiant n'y est inscrit.
select e.exam_id,e.exam_type,e.exam_date,s.first_name,s.last_name,s.course_id from exam as e
right join student as s
on e.student_id = s.student_id;
-- 8 Afficher les examens associés à un cours, y compris les cours sans examens 
select c.course_name,c.course_id,e.exam_type from course as c
right join exam as e
on c.course_id = e.course_id;
-- 9 Lister toutes les combinaisons étudiant-formation même sans correspondance.

select s.first_name,s.last_name,c.course_name from course as c
left join student as s 
on s.course_id = c.course_id

union

select s.first_name,s.last_name,c.course_name from course as c
right join student as s 
on s.course_id = c.course_id;

-- select s.first_name,s.last_name from course as c
-- full outer join student as s
-- on s.course_id = c.course_id; seulement sur postgreace
-- 10 Lister tous les examens et étudiants, même si l'un des deux est manquant.

select e.exam_type,s.first_name,s.last_name from exam as e
left join student as s
on s.student_id = e.student_id;

union

select e.exam_type,s.first_name,s.last_name from exam as e
right join student as s
on s.student_id = e.student_id;
and a.student_id > b.student_id;

-- 11 Trouver les paires d’étudiants nés la même année.Trouver les paires d’étudiants nés la même année.
select a.first_name,b.first_name,a.birth_year,b.birth_year from student as a
inner join student as b
on a.birth_year = b.birth_year
and a.student_id > b.student_id;
-- 12 Associer chaque étudiant à ceux qui sont plus âgés qu’eux.
select a.first_name,a.last_name,b.first_name,b.last_name,a.birth_year,b.birth_year
from student as a 
inner join student as b
where a.birth_year < b.birth_year;
-- 13 Générer toutes les combinaisons possibles entre étudiants et types d’examen
select e.exam_type,s.first_name,s.last_name from exam as e
cross join student as s;
-- 14 Compter le nombre de lignes produites par ce CROSS JOIN.
select count(exam_type)  from exam as e
cross join student as s;
-- 15 Afficher la moyenne des notes par étudiant.
select round(avg(e.score),2) as 'moyenne par eleve',concat(s.last_name,' ',s.first_name) as "etudiants" from exam as e
join student as s
on e.student_id = s.student_id
group by s.student_id;
-- 16 Afficher la note maximale obtenue par cours.
select max(e.score) from exam as e
join student as s
on e.student_id = s.student_id
group by s.student_id;
-- 17 Lister les étudiants ayant obtenu une note supérieure à 15 à au moins un examen.
select e.score as 'note',s.last_name from exam as e
join student as s
on e.student_id = s.student_id
group by e.score,s.last_name
having e.score>=15;
-- group by et having fonctionne seulement si il ya une agregation ex (count,sum,max)