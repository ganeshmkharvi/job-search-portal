<!-- ABOUT THE PROJECT -->

### What's inside this repo?

- Home page based on: 
https://getbootstrap.com/docs/4.5/examples/jumbotron/ 
Instead of each “Heading” column we are display the services - so, the column names from left to right are corresponding to three services. 
Each service has its name, slug and descriptionloaded from the services API. 
- Clicking on the “View details” button will take you to the respective service page which is based on https://getbootstrap.com/docs/4.5/examples/pricing/ template.
- On clicking Buy Now, it will take you to Checkout page based on https://getbootstrap.com/docs/4.5/examples/checkout/  template. Continue to checkout button will call checkout api if all the validations pass.

### API Source
- Api git url: https://github.com/ganeshmkharvi/job-search-api-server
- GET services api url- http://localhost:3001/api/services 
- POST checkout api url - http://localhost:3001/api/checkout
- Replace 3001 with the appropriate port number you used in your project.

### Built With

- [React]() - JavaScript library
- [Bootstrap]() - CSS Framework

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

### Prerequisites

To run this project, you'll need to have the following installed:

- Node.js : [https://nodejs.org](https://nodejs.org)

- npm :
  ```sh
  npm install npm@latest -g
  ```
- job-search-api-server repo:  https://github.com/ganeshmkharvi/job-search-api-server.git is cloned and running on your machine.

### Installation

1. Clone the repo :
   ```sh
   git clone https://github.com/ganeshmkharvi/job-search-portal.git
   ```
2. Install dependencies (use `sudo` if required) :

   ```sh
   npm install
   ```

3. Create `.env` file and configure :

   ```JS
   REACT_APP_BASE_API_URL = <REACT_APP_BASE_API_URL> 
   E.g. REACT_APP_BASE_API_URL = http://localhost:3001/api/
   
   ```

4. Start the server :
   ```sh
   npm start
   ```
   
