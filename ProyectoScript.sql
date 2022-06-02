CREATE DATABASE miPrimerNombre20220531
;

USE miPrimerNombre20220531
;

DROP TABLE IF EXISTS tresource_type
;

CREATE TABLE tresource_type (
 idResourceType INT NOT NULL AUTO_INCREMENT,
 created DATETIME,
 descrip VARCHAR(200),
 PRIMARY KEY (idResourceType)
)
;

DROP TABLE IF EXISTS tresource
;

CREATE TABLE tresource (
 idResource INT NOT NULL AUTO_INCREMENT,
 created DATETIME,
 descrip VARCHAR(200),
 idResourceType INT,
 PRIMARY KEY (idResource),
 FOREIGN KEY (idResourceType) REFERENCES tresource_type(idResourceType)
)
;

INSERT INTO tresource_type (created, descrip) VALUES
(NOW(), 'Vídeo'),
(NOW(), 'PDF Documentación'),
(NOW(), 'PDF Enunciado'),
(NOW(), 'PDF Solución')
;

INSERT INTO tresource (created, descrip, idResourceType) VALUES
(NOW(), 'Registro 1', 1),
(NOW(), 'Registro 2', 2),
(NOW(), 'Registro 3', 3),
(NOW(), 'Registro 4', 1),
(NOW(), 'Registro 5', 4),
(NOW(), 'Registro 6', 3)
;

SELECT idResourceType, COUNT(idResource) 
  FROM tresource
 GROUP BY idResourceType
;