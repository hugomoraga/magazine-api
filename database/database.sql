CREATE DATABASE magazineapi;
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    role VARCHAR(10),
    email TEXT
    
);

INSERT INTO users (name, email, role) VALUES
    ('dev', 'hg.moraga@gmail.com', 'admin'),
    ('usuario1', 'usuario1@gmail.com', 'reader');

