-- Active: 1689036195762@@127.0.0.1@3306@citas_medicas
DROP DATABASE citas_medicas;
CREATE DATABASE citas_medicas;
USE citas_medicas;
CREATE TABLE consultorio (
    cons_codigo INT AUTO_INCREMENT NOT NULL,
    cons_nombre VARCHAR(50) NOT NULL,
    CONSTRAINT pk_consultorio PRIMARY KEY (cons_codigo)
);
CREATE TABLE especialidad (
    esp_id INT AUTO_INCREMENT NOT NULL,
    esp_nombre VARCHAR(20) NOT NULL,
    CONSTRAINT pk_especialidad PRIMARY KEY (esp_id)
);
CREATE TABLE estado_cita (
    estcita_id INT AUTO_INCREMENT NOT NULL,
    estcita_nombre VARCHAR(20) NOT NULL,
    CONSTRAINT pk_especialidad PRIMARY KEY (estcita_id)
);
CREATE TABLE medico(
    med_nroMatriculaProsional INT AUTO_INCREMENT,
    med_nombreCompleto VARCHAR(120),
    med_consultario INT,
    med_especialidad INT,
    CONSTRAINT pk_medico PRIMARY KEY (med_nroMatriculaProsional),
    CONSTRAINT fk_MedicoConsultorio FOREIGN KEY (med_consultario) REFERENCES consultorio(cons_codigo),
    CONSTRAINT fk_MedicoEspecialidad FOREIGN KEY (med_especialidad) REFERENCES especialidad(esp_id)
    );

CREATE TABLE genero (
    gen_id INT AUTO_INCREMENT NOT NULL,
    gen_nombre VARCHAR(20) NOT NULL,
    gen_abreviatura VARCHAR(20) NOT NULL,
    CONSTRAINT pk_genero PRIMARY KEY (gen_id)
);
CREATE TABLE tipo_documento (
    tipdoc_id INT AUTO_INCREMENT NOT NULL,
    tipdoc_nombre VARCHAR(20) NOT NULL,
    tipdoc_abreviatura VARCHAR(20) NOT NULL,
    CONSTRAINT pk_tipo_documento PRIMARY KEY (tipdoc_id)
);
CREATE TABLE acudiente (
    acu_codigo INT AUTO_INCREMENT NOT NULL,
    acu_nombreCompleto VARCHAR(100) NOT NULL,
    acu_telefono VARCHAR(100) NOT NULL,
    acu_direccion VARCHAR(200) NOT NULL,
    CONSTRAINT pk_acudiente PRIMARY KEY (acu_codigo)
);
CREATE TABLE usuario(
        usu_id INT NOT NULL,
        usu_nombre VARCHAR(50) NOT NULL,
        usu_segdo_nombre VARCHAR(45),
        usu_primer_apellido_usuar VARCHAR(50) NOT NULL,
        usu_segdo_apellido_usuar VARCHAR(50) NOT NULL,
        usu_telefono VARCHAR(50) NOT NULL,
        usu_direccion VARCHAR(100) NOT NULL,
        usu_e_mail VARCHAR(100),
        usu_tipodoc INT NOT NULL,
        usu_genero INT NOT NULL,
        usu_acudiente INT,
        usu_fechNac DATE NOT NULL,
        CONSTRAINT pk_usuario PRIMARY KEY (usu_id),
        CONSTRAINT fk_tipoDocumento_usuario FOREIGN KEY (usu_tipodoc) REFERENCES tipo_documento(tipdoc_id),
        CONSTRAINT fk_genero_usuario FOREIGN KEY (usu_genero) REFERENCES genero(gen_id),
        CONSTRAINT fk_acudiente_usuario FOREIGN KEY (usu_acudiente) REFERENCES acudiente(acu_codigo)
    );

    CREATE TABLE cita(
    cit_codigo INT AUTO_INCREMENT,
    cit_fecha DATE,
    cit_estadoCita INT,
    cit_medico INT,
    cit_datosUsuario INT,
    CONSTRAINT pk_cita PRIMARY KEY (cit_codigo),
    CONSTRAINT fk_CitaEstadoCita FOREIGN KEY (cit_estadoCita) REFERENCES estado_cita(estcita_id),
    CONSTRAINT fk_CitaMedico FOREIGN KEY (cit_medico) REFERENCES medico(med_nroMatriculaProsional),
    CONSTRAINT fk_CitaUsuario FOREIGN KEY (cit_datosUsuario) REFERENCES usuario(usu_id)
    );
INSERT INTO tipo_documento (tipdoc_id, tipdoc_nombre, tipdoc_abreviatura)
VALUES
  (1, 'Cédula de Ciudadanía', 'CC'),
  (2, 'Tarjeta de Identidad', 'TI'),
  (3, 'Cédula de Extranjería', 'CE'),
  (4, 'Registro Civil', 'RC'),
  (5, 'Pasaporte', 'PA'),
  (6, 'Registro Único Tributario', 'RUT'),
  (7, 'Documento Nacional de Identidad', 'DNI'),
  (8, 'Documento Único de Identidad', 'DUI'),
  (9, 'Número de Identificación Personal', 'NIP'),
  (10, 'Número de Seguro Social', 'NSS');
INSERT INTO consultorio (cons_codigo, cons_nombre)
VALUES
  (1, 'Consultorio 1'),
  (2, 'Consultorio 2'),
  (3, 'Consultorio 3'),
  (4, 'Consultorio 4'),
  (5, 'Consultorio 5'),
  (6, 'Consultorio 6'),
  (7, 'Consultorio 7'),
  (8, 'Consultorio 8'),
  (9, 'Consultorio 9'),
  (10, 'Consultorio 10');

INSERT INTO especialidad (esp_id, esp_nombre)
VALUES
  (1, 'Cardiología'),
  (2, 'Dermatología'),
  (3, 'Endocrinología'),
  (4, 'Gastroenterología'),
  (5, 'Neurología'),
  (6, 'Oftalmología'),
  (7, 'Pediatría'),
  (8, 'Psiquiatría'),
  (9, 'Traumatología'),
  (10, 'Urología');

INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion)
VALUES
  (1, 'María Rodríguez', 1234567890, 'Calle Principal 123'),
  (2, 'Carlos Pérez', 9876543210, 'Avenida Central 456'),
  (3, 'Ana Martínez', 5555555555, 'Carrera 7 890'),
  (4, 'Pedro Ramírez', 1111111111, 'Plaza Mayor 789'),
  (5, 'Sara Hernández', 9999999999, 'Callejón Secreto 12'),
  (6, 'Luis García', 6666666666, 'Avenida Principal 345'),
  (7, 'Isabel López', 7777777777, 'Carrera 9 678'),
  (8, 'Miguel Díaz', 2222222222, 'Plaza Central 567'),
  (9, 'Andrés Ortega', 8888888888, 'Callejón Oscuro 23'),
  (10, 'Marcela Vargas', 3333333333, 'Avenida Principal 890');

INSERT INTO genero (gen_id, gen_nombre, gen_abreviatura)
VALUES
  (1, 'Masculino', 'M'),
  (2, 'Femenino', 'F');
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultario, med_especialidad)
VALUES
  (12345, 'Juan Carlos Gómez', 1, 1),
  (54321, 'María Fernanda Rodríguez', 2, 2),
  (98765, 'Pedro Pablo Martínez', 3, 3),
  (67890, 'Ana Isabel Ramírez', 4, 4),
  (13579, 'Luis Alberto Hernández', 5, 5),
  (97531, 'Sara Elena García', 6, 6),
  (86420, 'Miguel Ángel López', 7, 7),
  (24680, 'Isabel María Díaz', 8, 8),
  (75319, 'Marcela Alejandra Ortega', 9, 9),
  (10293, 'Andrés Felipe Vargas', 10, 10),
  (19876, 'Laura González', 1, 2),
  (56789, 'Carlos Sánchez', 2, 3),
  (43210, 'Patricia Martínez', 3, 4),
  (87654, 'Fernando Herrera', 4, 5),
  (21987, 'Mónica López', 5, 6),
  (65432, 'Roberto González', 6, 7),
  (98761, 'Carolina Pérez', 7, 8),
  (34567, 'Diego Castro', 8, 9),
  (76123, 'Daniela Ríos', 9, 10),
  (23456, 'Andrea Suárez', 10, 1);

INSERT INTO estado_cita (estcita_id, estcita_nombre)
VALUES
  (1, 'Pendiente'),
  (2, 'Confirmada'),
  (3, 'Cancelada'),
  (4, 'En curso'),
  (5, 'Finalizada'),
  (6, 'Reprogramada'),
  (7, 'Ausente'),
  (8, 'Suspendida'),
  (9, 'No asistió'),
  (10, 'En espera');


INSERT INTO
    usuario (usu_id, usu_nombre, usu_segdo_nombre,
        usu_primer_apellido_usuar, usu_segdo_apellido_usuar,
        usu_telefono, usu_direccion, usu_e_mail, usu_fechNAc,
        usu_tipodoc, usu_genero, usu_acudiente)
VALUES (
        1098817567,
        "Daniela",
        "",
        "Zapata",
        "Mora",
        "3158696969",
        "Parque de los gatos",
        'daniela@gmail.com',
        "2005-05-11",
        1,
        1,
        1
    ), (
        '123',
        'Andres',
        'Santiago',
        'Carvajal',
        'Peliño',
        '3154784596',
        'Bucaramanga',
        'santiagoyo@gmail.com',
        '2000-02-12',
        2,
        2,
        2
    ), (
        '321',
        'Fabio',
        'Alberto',
        'Morales',
        'Petriño',
        '3174578496',
        'Giron',
        'fabio478@outlook.es',
        '1999-01-01',
        1,
        3,
        2
    ), (
        '74',
        'Alejandra',
        '',
        'Mantilla',
        'Garcia',
        '3007845647',
        'Lebrija',
        'aleja78@outlook.es',
        '2015-03-21',
        3,
        3,
        3
    ), (
        555555,
        'Luis',
        '',
        'Gonzalez',
        'Hernandez',
        '3123456789',
        'Bogotá',
        'luisgh@gmail.com',
        '1987-07-15',
        1,
        1,
        NULL
    ), (
        666666,
        'Laura',
        'Isabel',
        'Vargas',
        'Lopez',
        '3145678901',
        'Medellín',
        'lauravl@gmail.com',
        '1992-11-28',
        2,
        2,
        NULL
    ), (
        777777,
        'Carlos',
        'Andres',
        'Perez',
        'Gomez',
        '3156789012',
        'Cali',
        'carlospg@gmail.com',
        '1985-09-02',
        3,
        3,
        NULL
    ), (
        888888,
        'María',
        '',
        'Rodriguez',
        'Santos',
        '3184567890',
        'Cartagena',
        'mariars@gmail.com',
        '1998-04-17',
        1,
        1,
        NULL
    ), (
        999999,
        'Camila',
        'Alejandra',
        'Ramirez',
        'Torres',
        '3195678901',
        'Barranquilla',
        'camilart@gmail.com',
        '2002-06-10',
        2,
        2,
        NULL
    ), (
        101010,
        'Juan',
        '',
        'Garcia',
        'Castro',
        '3106789012',
        'Santa Marta',
        'juangc@gmail.com',
        '1995-12-04',
        3,
        3,
        NULL
    ), (
        111111,
        'Sofia',
        'Valentina',
        'Lopez',
        'Rojas',
        '3137890123',
        'Pasto',
        'sofialr@gmail.com',
        '2008-09-19',
        1,
        1,
        4
    ), (
        121212,
        'Diego',
        '',
        'Gomez',
        'Hernandez',
        '3178901234',
        'Manizales',
        'diegogh@gmail.com',
        '2001-03-08',
        2,
        2,
        5
    ), (
        131313,
        'Carolina',
        'Andrea',
        'Perez',
        'Gomez',
        '3169012345',
        'Pereira',
        'carolpg@gmail.com',
        '2010-07-25',
        3,
        3,
        6
    );
INSERT INTO cita (cit_codigo, cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario)
VALUES
  (1, '2023-07-12', 1, 12345, 1),
  (2, '2023-07-12', 1, 54321, 2),
  (3, '2023-07-12', 1, 98765, 3),
  (4, '2023-07-13', 1, 67890, 4),
  (5, '2023-07-13', 1, 13579, 5),
  (6, '2023-07-13', 1, 97531, 6),
  (7, '2023-07-14', 1, 86420, 7),
  (8, '2023-07-14', 1, 24680, 8),
  (9, '2023-07-14', 1, 75319, 9),
  (10, '2023-07-15', 1, 10293, 10),
  (11, '2023-07-15', 1, 19876, 1),
  (12, '2023-07-15', 1, 56789, 2),
  (13, '2023-07-16', 1, 43210, 3),
  (14, '2023-07-16', 1, 87654, 4),
  (15, '2023-07-16', 1, 21987, 5),
  (16, '2023-07-17', 1, 65432, 6),
  (17, '2023-07-17', 1, 98761, 7),
  (18, '2023-07-17', 1, 34567, 8),
  (19, '2023-07-18', 1, 76123, 9),
  (20, '2023-07-18', 1, 23456, 10),
  (21, '2023-07-18', 1, 12345, 1),
  (22, '2023-07-19', 1, 54321, 2),
  (23, '2023-07-19', 1, 98765, 3),
  (24, '2023-07-20', 1, 67890, 4),
  (25, '2023-07-20', 1, 13579, 5),
  (26, '2023-07-20', 1, 97531, 6),
  (27, '2023-07-21', 1, 86420, 7),
  (28, '2023-07-21', 1, 24680, 8),
  (29, '2023-07-21', 1, 75319, 9),
  (30, '2023-07-22', 1, 10293, 10);

