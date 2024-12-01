CREATE TABLE user(
    id VARCHAR(39) PRIMARY KEY,
    username VARCHAR(57) UNIQUE,
    email VARCHAR(43) UNIQUE NOT NULL,
    password VARCHAR(43) NOT NULL
);

INSERT INTO user (
    id,username,email,password
)VALUES
("34DF","MMM","mmgmail.com","3434f");
SHOW TABLES;