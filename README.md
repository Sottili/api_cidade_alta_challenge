<h1 align="center" style="font-weight: bold;">Badges API - Cidade Alta Challenge 💻</h1>

<p align="center">
    <b>System to Badges API</b>
</p>

<h2 id="technologies">💻 Technologies</h2>

- Typescript
- PostgreSQL
- NestJS
- Bcrypt
- JsonWebToken
- PrismaORM
- NodeJS

<h2 id="started">🚀 Getting started</h2>

How to run this project locally.

<h3>Prerequisites</h3>

Prerequisites to run project:

- [NodeJS](https://nodejs.org/)
- [Git](https://git-scm.com/)
- [Docker](https://www.docker.com/get-started/)
- [PostgreSQL 16.2](https://www.postgresql.org/download/)

<h3>Cloning</h3>

How to clone project

```bash
git clone https://github.com/Sottili/api_cidade_alta_challenge
```

<h3>Starting</h3>

After clone the project, use below command lines to execute.

```bash
cd project-name
docker compose up
npm i (install dependencies)
npm run start (to execute this project)
```

<h2 id="routes">📍 API Endpoints</h2>

Main routes of API, and what are their expected request bodies.

User Routes
​
| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /users/create</kbd>     | create users
| <kbd>GET /users/badges/:id</kbd>    | returns the badges belonging to a user
| <kbd>POST /users/badges/:id</kbd>     | recovers a badge for that user
| <kbd>DELETE /users/badges/:id</kbd>     | delte a badge for that user
| <kbd>GET /users/badges</kbd>    | returns the badges of all users

Auth Route

| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>POST /auth/login</kbd>     | login user

Badges Routes

| route               | description                                          
|----------------------|-----------------------------------------------------
| <kbd>GET /badges</kbd>     | return all badges
| <kbd>GET /badges/name</kbd>     | returns the badge corresponding to the name passed
| <kbd>GET /badges/slug</kbd>     | returns a specific slug

<h2 id="colab">🤝 Collaborators</h2>

Thanks to contribute this project!

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/91507688?v=4" width="100px;" alt="Filipe Sottili Profile Picture"/><br>
        <sub>
          <b>Filipe Sottili</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
