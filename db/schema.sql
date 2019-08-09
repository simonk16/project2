drop database if exists lkug5f2yavelao76;
create database lkug5f2yavelao76;

USE lkug5f2yavelao76;

CREATE TABLE employees(
id INT NOT NULL auto_increment,
employeeName VARCHAR(255) not null,
createdAt timestamp,
updatedAt timestamp,
PRIMARY KEY(id)
);

CREATE TABLE projects(
project_id INT NOT NULL auto_increment,
project_title VARCHAR(255),
employee_id int, 
createdAt timestamp,
updatedAt timestamp,
PRIMARY KEY(project_id),
FOREIGN KEY(employee_id) REFERENCES employees(id)
);

CREATE TABLE hours(
hours int,
project_id int,
employee_id int,
createdAt timestamp,
updatedAt timestamp,
FOREIGN KEY(employee_id) REFERENCES employees(id),
FOREIGN KEY(project_id) REFERENCES projects(project_id)
);







