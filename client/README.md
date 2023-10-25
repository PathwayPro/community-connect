# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) TS template.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

Make sure the node version being used is latest. A very old version may throw some errors stopping the application from starting.
    
Make sure the database and other setups mentioned in the server are in place before running the yarn dev.

Project Structure
```
src\
 |--app\              # Encloses slices and hooks
 |--common\           # Contains some utility files and style components
 |--Components\       # Individual components of the application
 |--images\           # Images used within the application
 |--Pages\            # Pages or routes of the application
 |--styles\           # Application styles
 |--index.tsx 	      # App entry point
 |--App.tsx 	      # Core application component.
 |--authProvider.tsx  # Authentication provider for the application.
 |--dataProvider.ts   # Data provider for the application.
 
 ```
     
 
 Sequence of actions:
 
 Login:
 POST /v1/auth/login 
 
 Registration:
 OPTIONS /v1/auth/register
 OPTIONS /v1/auth/send-verification-email 
 POST /v1/auth/send-verification-email 
 
 Mentor registration:
 OPTIONS /v1/mentorship/mentors
 POST /v1/mentorship/mentors
 
 Mentee application:
 OPTIONS /v1/mentorship/mentees
 POST /v1/mentorship/mentees 
 
 