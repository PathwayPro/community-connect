# admin

## Installation

Install the application dependencies by running:

```sh
yarn
```

## Development

Start the application in development mode by running:

```sh
yarn dev
```

## Production

Build the application in production mode by running:

```sh
yarn build
```

## DataProvider

The included data provider use [ra-data-simple-rest](https://github.com/marmelab/react-admin/tree/master/packages/ra-data-simple-rest). It fits REST APIs using simple GET parameters for filters and sorting. This is the dialect used for instance in [FakeRest](https://github.com/marmelab/FakeRest).

You'll find an `.env` file at the project root that includes a `VITE_JSON_SERVER_URL` variable. Set it to the URL of your backend.

Project will be running at: 
"http://localhost:5173/"

The credentials are: 
Admin:
email: username1@gmail.com
password: 12345Qwerty!

Non-Admin:
email: username2@gmail.com
password: 12345Qwerty!


Project Structure
```
src\
 |--Components\       # Individual components of the application
 |--images\           # Images used within the application.
 |--Pages\            # Pages or routes of the application.
 |--styles\           # Application styles
 |--index.tsx 	      # App entry point
 |--App.tsx 	      # Core application component.
 |--authProvider.tsx  # Authentication provider for the application.
 |--dataProvider.ts   # Data provider for the application.
 
 ```
  
Existing calls:

Mentor login:
POST /v1/auth/login
GET  /v1/mentorship/mentors

Mentee login:
POST /v1/auth/login
GET /v1/mentorship/mentees

If there is a invalid mentor/mentee login, error is handled throwing 
POST /v1/auth/login 403 - Incorrect email or password.