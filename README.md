# Intro to Backend

Basic backend (Node.js + Express + MongoDB Atlas + Mongoose) with:

- Authentication APIs: register, login, logout
- CRUD APIs for posts (characters): create, get all, update, delete

The `frontend` folder is intentionally empty.

## Run it

```
cd backend
npm install
# put your MongoDB Atlas connection string in backend/.env
npm run dev
```

## Endpoints (base: http://localhost:4000)

| Method | URL                              | Body (JSON)                          |
|--------|----------------------------------|--------------------------------------|
| POST   | /api/v1/users/register           | username, email, password            |
| POST   | /api/v1/users/login              | email, password                      |
| POST   | /api/v1/users/logout             | email                                |
| POST   | /api/v1/posts/create             | name, description, age               |
| GET    | /api/v1/posts/get-posts          | -                                    |
| PATCH  | /api/v1/posts/update/:id         | any of name, description, age        |
| DELETE | /api/v1/posts/delete/:id         | -                                    |
