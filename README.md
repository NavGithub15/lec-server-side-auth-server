# Installation
1. Create a database
2. Update ./knexfile.js with your connection details & database name
3. Install packages `npm install`
4. Copy .env.example to .env `cp .env.example .env` and fill in datbase credentials
5. Create a database with the same name as in .env's DB_DATABASE
6. Run migrations `npm run migrate`
7. Run seeds `npm run seed`
8. Start server `npm run dev`

## Available Endpoints
- `GET /posts`

# MySQL Review

## MySQL Terms
### Table
A table is a collection of related data held in a table format within a database.


### Record
Group of fields within a table that are relevant to a specific entity.

### Columns
A set of data values of a particular type, one value for each row of the database

## CRUD 
- Create
- Read
- Update
- Delete

## How to CRUD in MySQL?

### READ
```
SELECT * FROM authors
```
- Associated endpoint: GET /authors

### CREATE
```
INSERT INTO 
    authors 
    (first_name, last_name, email) 
VALUES 
    ("Stephen", "Pinker", "spinker@steven.com"),
    ("Alice", "Munro", "amunro@steven.com");
```
- Associated endpoint: POST /authors

### UPDATE
```
UPDATE 
    authors 
SET 
    last_name="Munro" 
WHERE 
    author_id=5
```
- Associated endpoint: PUT /authors/:authorId


### DELETE
```
DELETE FROM 
    books 
WHERE 
    book_id=3
```
- Associated endpoint: DELETE /books/:bookId



## Blogging Platform

user
- id  Primary Key
- name

post
- id   Primary Key
- user_id   Foreign Key -> references another table's key / PK!
- title
- content


### Join Query
Gets all posts with the name of the user that posted
```
SELECT 
    post.id, post.user_id, post.title, post.content, user.name
FROM post 
    JOIN user ON user.id = post.user_id
```


## How to run migrations:

- `npx knex migrate:make <migration_file_name>`
    - Creates a migration file

- Write up function to run on migration

- Write down function in case of rollback migration
    - This should be the opposite action of the up function

- `npx knex migrate:latest`

- Need to rollback some changes?
    - `npx knex migrate:rollback`