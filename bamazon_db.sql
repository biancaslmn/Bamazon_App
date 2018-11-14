DROP DATABASE  bamazon_db;

CREATE DATABASE  bamazon_db;

USE bamazon_db;

CREATE TABLE  products(

item_id INT NOT NULL AUTO_INCREMENT,
department_name VARCHAR (50) NULL,
product_name VARCHAR (50) NULL, 
price INTEGER (45) NULL,
stock_quantity INTEGER (45) NULL,

PRIMARY KEY (item_id)
);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronic", "teleVision", 750, 200);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronic", "cellPhone", 600, 300);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronic", "camera", 350, 100);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("homeAudio", "speaker", 600, 150);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronic", "guitar", 350, 200);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronic", "heaphones", 250, 200);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronic", "videoGame", 80, 300);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronic", "printer", 100, 200);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronic", "mp3", 350, 300);

INSERT INTO products (department_name, product_name, price, stock_quantity)
VALUES ("electronic", "smartHome", 250, 300);