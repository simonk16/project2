DROP DATABASE IF EXISTS eht_db;
DROP DATABASE IF EXISTS eht_db;
CREATE DATABASE eht_db;

USE eht_db;

CREATE TABLE employees(
employee_id INT NOT NULL auto_increment,
employee_name VARCHAR(255) not null,
PRIMARY KEY(employee_id)
);

CREATE TABLE projects(
project_id INT NOT NULL auto_increment,
project_title VARCHAR(255),
employee_id int, 
PRIMARY KEY(project_id),
FOREIGN KEY(employee_id) REFERENCES employees(employee_id)
);

CREATE TABLE hours(
hours int,
project_id int,
employee_id int,
createdAt timestamp,
updatedAt timestamp,
FOREIGN KEY(employee_id) REFERENCES employees(employee_id),
FOREIGN KEY(project_id) REFERENCES projects(project_id)
);







