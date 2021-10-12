insert into "actors" ("firstName", "lastName")
values ('Tim', 'Davis')
returning *;
insert into "languages" ("name")
values ('HTML'),
       ('CSS'),
       ('JavaScript')
returning *;
