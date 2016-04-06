CREATE DATABASE chat;

USE chat;

CREATE TABLE `messages` (
  `id` INT UNSIGNED NOT NULL  AUTO_INCREMENT,
  `text` VARCHAR(300),
  `roomname` VARCHAR(100),
  `user_id` INT(100) NOT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (user_id) REFERENCES users (id)
);

CREATE TABLE `users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(100),
  PRIMARY KEY (`id`)
);




/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

