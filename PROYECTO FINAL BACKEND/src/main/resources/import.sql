INSERT INTO departamentos (nombre) VALUES ('Backend');
INSERT INTO departamentos (nombre) VALUES ('Frontend');



INSERT INTO proyectos (fecha_fin, fecha_inicio, nombre) VALUES ('2025-03-12', '2020-03-04', 'Proyecto Ikea');
INSERT INTO proyectos (fecha_fin, fecha_inicio, nombre) VALUES ('2024-12-11', '2019-02-05', 'Proyecto Mapfre');
INSERT INTO proyectos (fecha_fin, fecha_inicio, nombre) VALUES ('2027-02-10', '2018-03-04', 'Proyecto Mercadona');

INSERT INTO empleados (apellido, direccion, email, fecha, genero, nombre, sueldo, telefono, cod_departamento,cod_proyecto) VALUES ('Gomez', 'Calle La paz 23', 'jg@gmail.com','1992-01-08', 'Masculino', 'Javier', 2300, 987123432, 1,1);
INSERT INTO empleados (apellido, direccion, email, fecha, genero, nombre, sueldo, telefono, cod_departamento,cod_proyecto) VALUES ('Perez', 'Calle Serrano 12', 'mp@gmail.com','1990-01-08', 'Masculino', 'Marcos', 1800, 983665234, 2,1);
INSERT INTO empleados (apellido, direccion, email, fecha, genero, nombre, sueldo, telefono, cod_departamento,cod_proyecto) VALUES ('Fernandez', 'Calle Sol 42', 'sf@gmail.com','1989-01-08', 'Masculino', 'Sergio', 2000, 987667565, 1,2);
INSERT INTO empleados (apellido, direccion, email, fecha, genero, nombre, sueldo, telefono, cod_departamento,cod_proyecto) VALUES ('Lopez', 'Calle Valencia 17', 'ml@gmail.com','1980-01-08', 'Femenino', 'Maria', 2500, 986564532, 2,2);

INSERT INTO usuarios (username,password,enabled) VALUES('german','2a$10$ZSLzum0Q5upYT3sn1wDlSOr4dffUt56fx/KlBDCGfp2ELWOTyihmm',1);
INSERT INTO usuarios (username,password,enabled) VALUES('admin','$2a$10$NuWM5hTm2Rr1FSN9EduFyeZMJQLczwbBEeAWf4fcJYSch/9rhqhIi',1);

INSERT INTO roles (nombre) VALUES ('ROLE_USER');
INSERT INTO roles (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO usuarios_roles (usuario_id,role_id) VALUES(1,1);
INSERT INTO usuarios_roles (usuario_id,role_id) VALUES(2,2);
INSERT INTO usuarios_roles (usuario_id,role_id) VALUES(2,1);

