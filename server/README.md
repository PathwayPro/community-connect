# Server for Community-Builders

Server for Community Builders

## Commands

Running locally:

```bash
yarn dev
```

Running in production:

```bash
yarn start
```

Testing:

```bash
# run all tests
yarn test

# run all tests in watch mode
yarn test:watch

# run test coverage
yarn coverage
```

Docker:

```bash
# run docker container in development mode
yarn docker:dev

# run docker container in production mode
yarn docker:prod

# run all tests in a docker container
yarn docker:test
```

Linting:

```bash
# run ESLint
yarn lint

# fix ESLint errors
yarn lint:fix

# run prettier
yarn prettier

# fix prettier errors
yarn prettier:fix
```

# Initial Setup

## Install PostgreSQL on your local Machine

Helpful Instructions on this link:

```bash
https://www.postgresql.org/download/
```

Documentation:

```bash
https://www.postgresql.org/docs/current/
```

You need to start PostgreSQL everytime (using terminal / db management apps) you restart your computer.\
This should be running before you run the app:

## Setup dev env to work with PostgreSQL

\
**Start Postgres and login:**

```bash
psql postgres
```

You’ll see that you have entered into a new connection.\
You are now inside `psql` in the `postgres` database.\
The prompt ends with a `#` to denote that you logged in as the superuser\
\
**Check what database, user, and port you’ve connected**

```bash
\conninfo
```

**Create a role called `root` and add option to create DB**

```bash
CREATE ROLE root WITH LOGIN PASSWORD 'root';
ALTER ROLE root CREATEDB;
```


**End Postgres and getting out of it:**

```bash
\q
```

**Connect postgres with root**

From default terminal connection run:

```bash
psql -d postgres -U root
```

**Create development database**

```bash
CREATE DATABASE comm_dev;
```

## Working with Models using Sequelize

For creating and migrating models we are using Sequelize ORM.

API:

```bash
https://sequelize.org/api/v6/
```

Models concepts:

```bash
https://sequelize.org/docs/v6/core-concepts/model-basics/
```

**DB connection**

All connection settings are located in the `/src/config/database.js` config.

**Create new Model by Sequelize CLI**

You will need the Sequelize Command-Line Interface (CLI).\
The CLI ships support for migrations and project bootstrapping

```bash
https://github.com/sequelize/cli
```

This example will create a `Role` Model inside `/src/models` folder with next attributes(columns):

```bash
cd server
yarn run sequelize-cli model:generate --name Role --attributes name:string,status:string,deletedAt:Date
```

Columns `id`, `createdAt`, `updatedAt` will be creted by default for each model.

```bash
Model name: Role
Table name: Roles
Attributes:
id: number, autoincremented, PK (added by default)
name: string
status: string
createdAt: Date (added by default)
updatedAt: Date (added by default)
deletedAt: Date
```

Also at the same time a migration file `XXXXXXXXXXXXXXXX-create-role` for this model will be created
inside `/src/migrations` folder

After model was created, it's possible to add Assosiations, Methods or Validations inside the file

**Migrate Models and model's updates to the DB**

Before start developing, use migrations to create or update DB tables

**_Running all migrations_**

```bash
cd server
yarn run sequelize-cli db:migrate
```

**_Running Migration by Name `XXXXXXXXXXXXXX-create-role`_**

```bash
cd server
yarn run sequelize-cli db:migrate --name XXXXXXXXXXXXXX-create-role
```

In case of any mistake or error, it is possible to undo migrations

**_Undoing all Migrations_**

```bash
cd server
yarn run sequelize-cli db:migrate:undo:all
```

**_Undoing the Most Recent Migration_**

```bash
cd server
yarn run sequelize-cli db:migrate:undo
```

**_Undoing Migrations to a Specific Migration with Name `XXXXXXXXXXXXXX-create-role`_**

```bash
cd server
yarn run sequelize-cli db:migrate:undo:all --to XXXXXXXXXXXXXX-create-role.js
```

**Populating the DB**

**_Creating the First Seed for Table `Role`_**

This will create the seeder file `XXXXXXXXXXXXXX-demo-role.js` inside `/src/seeders` folder and then you can add some dummy data in the file to be used as the data instance for the DB

```bash
yarn run sequelize-cli seed:generate --name demo-role
```

**_Running Seed_**

Note: Seeder execution history is not stored anywhere, unlike migrations

***Running all Seeds***

```bash
yarn run sequelize-cli db:seed:all
```

***Running a Specific Seed***

```bash
yarn run sequelize-cli db:seed --seed name-of-seed-as-in-data
```

***Undoing all Seeds***

```bash
yarn run sequelize-cli db:seed:undo:all
```

**_Undoing the Most Recent Seed_**

```bash
yarn run sequelize-cli db:seed:undo
```

**_Undoing to a Specific Seed_**

```bash
yarn run sequelize-cli db:seed:undo --seed name-of-seed-as-in-data
```

## Environment Variables

The environment variables can be found and modified in the `.env` file. They come with these default values:

```bash
# Port number
PORT=3200

# JWT
# JWT secret key
JWT_SECRET=thisisasamplesecret
# Number of minutes after which an access token expires
JWT_ACCESS_EXPIRATION_MINUTES=30
# Number of days after which a refresh token expires
JWT_REFRESH_EXPIRATION_DAYS=30

# SMTP configuration options for the email service
# For testing, you can use a fake SMTP service like Ethereal: https://ethereal.email/create
SMTP_HOST=email-server
SMTP_PORT=587
SMTP_USERNAME=email-server-username
SMTP_PASSWORD=email-server-password
EMAIL_FROM=support@yourapp.com
```

## Project Structure

```
src\
 |--config\         # Environment variables and configuration related things
 |--controllers\    # Route controllers (controller layer)
 |--docs\           # Swagger files
 |--middlewares\    # Custom express middlewares
 |--models\         # Sequelize models (data layer)
 |--routes\         # Routes
 |--services\       # Business logic (service layer)
 |--utils\          # Utility classes and functions
 |--validations\    # Request data validation schemas
 |--app.js          # Express app
 |--index.js        # App entry point
```

## API Documentation

To view the list of available APIs and their specifications, run the server and go to `http://localhost:3200/v1/docs` in your browser. This documentation page is automatically generated using the [swagger](https://swagger.io/) definitions written as comments in the route files.

### API Endpoints

List of available routes:

**Auth routes**:\
`POST /v1/auth/register` - register\
`POST /v1/auth/login` - login\
`POST /v1/auth/refresh-tokens` - refresh auth tokens\
`POST /v1/auth/forgot-password` - send reset password email\
`POST /v1/auth/reset-password` - reset password\
`POST /v1/auth/send-verification-email` - send verification email\
`POST /v1/auth/verify-email` - verify email

**User routes**:\
`POST /v1/users` - create a user\
`GET /v1/users` - get all users\
`GET /v1/users/:userId` - get user\
`PATCH /v1/users/:userId` - update user\
`DELETE /v1/users/:userId` - delete user

## Error Handling

The app has a centralized error handling mechanism.

Controllers should try to catch the errors and forward them to the error handling middleware (by calling `next(error)`). For convenience, you can also wrap the controller inside the catchAsync utility wrapper, which forwards the error.

```javascript
const catchAsync = require('../utils/catchAsync');

const controller = catchAsync(async (req, res) => {
  // this error will be forwarded to the error handling middleware
  throw new Error('Something wrong happened');
});
```

The error handling middleware sends an error response, which has the following format:

```json
{
  "code": 404,
  "message": "Not found"
}
```

When running in development mode, the error response also contains the error stack.

The app has a utility ApiError class to which you can attach a response code and a message, and then throw it from anywhere (catchAsync will catch it).

For example, if you are trying to get a user from the DB who is not found, and you want to send a 404 error, the code should look something like:

```javascript
const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const User = require('../models/User');

const getUser = async (userId) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
};
```

## Validation

Request data is validated using [Joi](https://joi.dev/). Check the [documentation](https://joi.dev/api/) for more details on how to write Joi validation schemas.

The validation schemas are defined in the `src/validations` directory and are used in the routes by providing them as parameters to the `validate` middleware.

```javascript
const express = require('express');
const validate = require('../../middlewares/validate');
const userValidation = require('../../validations/user.validation');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', validate(userValidation.createUser), userController.createUser);
```

## Authentication

To require authentication for certain routes, you can use the `auth` middleware.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth(), userController.createUser);
```

These routes require a valid JWT access token in the Authorization request header using the Bearer schema. If the request does not contain a valid access token, an Unauthorized (401) error is thrown.

**Generating Access Tokens**:

An access token can be generated by making a successful call to the register (`POST /v1/auth/register`) or login (`POST /v1/auth/login`) endpoints. The response of these endpoints also contains refresh tokens (explained below).

An access token is valid for 30 minutes. You can modify this expiration time by changing the `JWT_ACCESS_EXPIRATION_MINUTES` environment variable in the .env file.

**Refreshing Access Tokens**:

After the access token expires, a new access token can be generated, by making a call to the refresh token endpoint (`POST /v1/auth/refresh-tokens`) and sending along a valid refresh token in the request body. This call returns a new access token and a new refresh token.

A refresh token is valid for 30 days. You can modify this expiration time by changing the `JWT_REFRESH_EXPIRATION_DAYS` environment variable in the .env file.

## Authorization

The `auth` middleware can also be used to require certain rights/permissions to access a route.

```javascript
const express = require('express');
const auth = require('../../middlewares/auth');
const userController = require('../../controllers/user.controller');

const router = express.Router();

router.post('/users', auth('manageUsers'), userController.createUser);
```

In the example above, an authenticated user can access this route only if that user has the `manageUsers` permission.

The permissions are role-based. You can view the permissions/rights of each role in the `src/config/roles.js` file.

If the user making the request does not have the required permissions to access this route, a Forbidden (403) error is thrown.

## Logging

Import the logger from `src/config/logger.js`. It is using the [Winston](https://github.com/winstonjs/winston) logging library.

Logging should be done according to the following severity levels (ascending order from most important to least important):

```javascript
const logger = require('<path to src>/config/logger');

logger.error('message'); // level 0
logger.warn('message'); // level 1
logger.info('message'); // level 2
logger.http('message'); // level 3
logger.verbose('message'); // level 4
logger.debug('message'); // level 5
```

In development mode, log messages of all severity levels will be printed to the console.

In production mode, only `info`, `warn`, and `error` logs will be printed to the console.\
It is up to the server (or process manager) to actually read them from the console and store them in log files.\
This app uses pm2 in production mode, which is already configured to store the logs in log files.

Note: API request information (request url, response code, timestamp, etc.) are also automatically logged (using [morgan](https://github.com/expressjs/morgan)).

## Custom models Plugins

The app also contains 2 custom plugins that you can attach to any model schema. You can find the plugins in `src/models/plugins`.

### toJSON

The toJSON plugin applies the following changes in the toJSON transform call:

- removes \_\_v, createdAt, updatedAt, and any schema path that has private: true
- replaces \_id with id

### paginate

The paginate plugin adds the `paginate` static method to the model.

Adding this plugin to the `User` model schema will allow you to do the following:

```javascript
const queryUsers = async (filter, options) => {
  const users = await User.paginate(filter, options);
  return users;
};
```

The `filter` param is a regular filter.

The `options` param can have the following (optional) fields:

```javascript
const options = {
  sortBy: 'name:desc', // sort order
  limit: 5, // maximum results per page
  page: 2, // page number
};
```

The plugin also supports sorting by multiple criteria (separated by a comma): `sortBy: name:desc,role:asc`

The `paginate` method returns a Promise, which fulfills with an object having the following properties:

```json
{
  "results": [],
  "page": 2,
  "limit": 5,
  "totalPages": 10,
  "totalResults": 48
}
```

## Linting

Linting is done using [ESLint](https://eslint.org/) and [Prettier](https://prettier.io).

In this app, ESLint is configured to follow the [Airbnb JavaScript style guide](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb-base) with some modifications. It also extends [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier) to turn off all rules that are unnecessary or might conflict with Prettier.

To modify the ESLint configuration, update the `.eslintrc.json` file. To modify the Prettier configuration, update the `.prettierrc.json` file.

To prevent a certain file or directory from being linted, add it to `.eslintignore` and `.prettierignore`.

To maintain a consistent coding style across different IDEs, the project contains `.editorconfig`
