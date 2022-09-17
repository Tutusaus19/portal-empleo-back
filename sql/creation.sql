DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS accounts CASCADE;
DROP TABLE IF EXISTS contacts; 
DROP TABLE IF EXISTS offers;
DROP TABLE IF EXISTS applied;
DROP TYPE IF EXISTS knowledges;
DROP TYPE IF EXISTS experiences;
DROP TYPE IF EXISTS locations;
DROP TYPE IF EXISTS availabilities;
DROP EXTENSION IF EXISTS "uuid-ossp";
CREATE TYPE knowledges AS ENUM (
    'Angular', 'AWS', 'Azure', 'C/C++', 'CSS', 'Django', 'Elixir', 'Erlang', 'ExpressJS', 'Figma',
    'GIT', 'Go', 'HTML', 'Java', 'JavaScript', 'Kotlin', 'Laravel', 'R', 'MySQL', 'NestJS', 'NET Core',
    'Node JS', 'Obejtive-C', 'Pascal', 'Perl', 'PHP','Python', 'PostgreSQl', 'React', 'Ruby on Rails', 'Rust',
    'Scala', 'Scheme', 'Swift', 'TypeScript'
);
CREATE TYPE experiences as ENUM (
    '< 1 año', '1 año', '2 años', '3 años', '4 años', '5 años', '6 años', '7 años', 
    '8 años', '9 años', '10 años', '> 10 años'
);
CREATE TYPE locations as ENUM (
    'A Coruña', 'Alava', 'Albacete', 'Alicante', 'Almería', 'Asturias', 'Avila', 'Badajoz',
    'Barcelona', 'Burgos', 'Cáceres', 'Cádiz', 'Cantabria', 'Castellón', 'Ceuta', 'Ciudad Real',
    'Córdoba', 'Cuenca', 'Formentera', 'Girona', 'Granada', 'Guadalajara', 'Guipuzcoa', 'Huelva', 'Huesca', 
    'Ibiza', 'Jaén', 'La Rioja', 'Las Palmas de Gran Canaria', 'Gran Canaria', 'Fuerteventura', 'Lanzarote', 
    'León', 'Lérida', 'Lugo','Madrid', 'Málaga', 'Mallorca', 'Menorca', 'Murcia', 'Navarra', 'Orense', 'Palencia','Pontevedra',
    'Salamanca', 'Santa Cruz de Tenerife', 'Tenerife', 'La Gomera', 'La Palma', 'El Hierro', 'Segovia', 'Sevilla', 'Soria', 
    'Tarragona', 'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya', 'Zamora', 'Zaragoza'
);
CREATE TYPE availabilities as ENUM (
    'Remoto', 'Oficina', 'Híbrido'
);
CREATE TYPE areas as ENUM (
    'Data Science', 'Developer', 'UX/UI', 'Ciberseguridad', 'Marketing Automation'
);
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name TEXT NOT NULL,
  surname TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  mobile TEXT,
  area areas,
  description TEXT,
  knowledge knowledges , 
  experience experiences, 
  location locations, 
  availability availabilities, 
  photo TEXT,
  CV TEXT, 
  url_linkedIn TEXT, 
  url_github TEXT, 
  url_portfolio TEXT
);
CREATE TABLE IF NOT EXISTS accounts (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    account_name TEXT NOT NULL, 
    description TEXT, 
    sector TEXT
);
CREATE TABLE IF NOT EXISTS offers (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    cuenta_id uuid REFERENCES accounts
        ON UPDATE CASCADE
        ON DELETE SET NULL,
    title_position TEXT, 
    area_position TEXT,
    knowledge knowledges,
    location locations,
    experience experiences, 
    availability availabilities,
    salarie_min INT, 
    salarie_max INT,
    public_salarie BOOLEAN, 
    description TEXT
);
CREATE TABLE IF NOT EXISTS applied (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    talent_id uuid REFERENCES users
        ON UPDATE CASCADE
        ON DELETE SET NULL, 
    offer_id uuid REFERENCES offers
        ON UPDATE CASCADE
        ON DELETE CASCADE
); 
CREATE TABLE IF NOT EXISTS contacts (
    id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    cuenta_id uuid REFERENCES accounts 
        ON UPDATE CASCADE 
        ON DELETE CASCADE,
    first_name TEXT NOT NULL,
    surname TEXT NOT NULL, 
    email TEXT UNIQUE NOT NULL,
    puesto TEXT,
    mobile TEXT,
    url_linkedIn TEXT,
    photo TEXT
);

