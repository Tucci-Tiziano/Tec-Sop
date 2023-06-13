drop database if exists mydb;
create database mydb;
USE mydb ;

CREATE TABLE table1 (
  dni INT NOT NULL,
  nombreApellido VARCHAR(90) NOT NULL,
  email VARCHAR(90) NOT NULL,
  mensaje VARCHAR(300),
  PRIMARY KEY (dni)
);
 