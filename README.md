## Architecture and Tech Stack

This project follows the principles of a [Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html).

The tech stack used in this project is:

- **Front-end**: React, TypeScript, Vite, React Router
- **Back-end**: Node.js, Express, TypeORM, PostgreSQL
- **Testing**: Jest, React Testing Library, Supertest

The project is structured in the following way:

- **core**: Contains the core business logic of the application, such as models and interfaces.
- **features**: Contains the features of the application, such as posts.
- **app**: Contains the main application, which is composed of the features.

The **core** and **features** directories are the most important parts of the project for the business logic. The **app** directory is the main entry point of the application and is responsible for rendering the UI and handling the routing.

The front-end is built using React, TypeScript, Vite, and React Router. The back-end is built using Node.js, Express, TypeORM, and PostgreSQL.

For testing, Jest is used for unit testing both the front-end and the back-end, and React Testing Library is used for testing the React components. Supertest is used for testing the Express routes.

This project is structured in a way that makes it easy to add new features and maintain the codebase.
