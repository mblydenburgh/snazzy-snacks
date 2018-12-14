DROP DATABASE IF EXISTS snazzy_db;

CREATE DATABASE snazzy_db;

USE snazzy_db;

CREATE TABLE reservations(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(30),
    email VARCHAR(255),
    unique_id INTEGER
);

CREATE TABLE waitlist(
	id INTEGER NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    phone VARCHAR(30),
    email VARCHAR(255),
    unique_id INTEGER
);

INSERT INTO reservations (name,phone,email,unique_id)
VALUES ("Mason","603-555-1337","magicmason99@aol.com",11)