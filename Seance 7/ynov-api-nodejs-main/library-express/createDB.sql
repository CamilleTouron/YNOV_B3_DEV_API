CREATE USER IF NOT EXISTS 'camille'@'localhost' IDENTIFIED WITH mysql_native_password BY 'camille';
GRANT ALL ON ynovlibrairie.* TO 'camille'@'localhost';
FLUSH PRIVILEGES;
SET FOREIGN_KEY_CHECKS=0;
CREATE TABLE IF NOT EXISTS Users (
    id INT NOT NULL,
    nom varchar(50) NOT NULL,
    prenom varchar(50) NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS Books (
    id INT NOT NULL,
    titre varchar(50) NOT NULL,
    date date NOT NULL,
    PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS Reviews (
    userId INT NOT NULL,
    bookId INT NOT NULL,
    note INT NOT NULL,
    FOREIGN KEY (userId) REFERENCES Users(id),
	FOREIGN KEY (bookId) REFERENCES Books(id)
);
