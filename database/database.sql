CREATE DATABASE ng_books_db;

USE ng_books_db;

CREATE TABLE book(
    isbn INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    tittle VARCHAR(180) NOT NULL,
    author VARCHAR(70) NOT NULL,
    review VARCHAR(255),
    qualification INT(1),
    image VARCHAR(200),
    created_ad TIMESTAMP DEFAULT CURRENT_TIMESTAMP 
)