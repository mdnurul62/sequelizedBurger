CREATE DATABASE burgers_db;
 USE burgers_db;
 
 
 
 # Create the burgers table
 CREATE TABLE `burgers` (
	 `id` INT(11) AUTO_INCREMENT NOT NULL,
	 `burger_name` VARCHAR (255) NOT NULL,
	 `devoured` BOOLEAN DEFAULT false,
	 `createAt` TIMESTAMP default false,
	 PRIMARY KEY (`id`)
 );