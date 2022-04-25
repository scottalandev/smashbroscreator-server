CREATE DATABASE smashbroscreator;

CREATE TABLE chars(
  char_id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  auth VARCHAR(255),
  charObj TEXT
);