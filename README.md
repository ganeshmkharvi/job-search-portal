<p align="center">
  <h3 align="center">Job Search Portal</h3>
  <p align="center">
    <a href="https://github.com/ganeshmkharvi/react-job-search-portal//issues">Report Bug </a>
    ·
    <a href="https://github.com/ganeshmkharvi/react-job-search-portal//issues"> Request Feature</a>
  </p>
</p>

<!-- ABOUT THE PROJECT -->

### What's inside this repo?

#### Task description

Created a little part of a website which is designated to help people with their job searching strategies. 
The website will offer three services: 
- Resume Writing 
- Career Coaching 
- Linkedin profile update

Each of these services will be available in one of three tiers: 
- Basic 
- Professional 
- Executive 

A client can choose to purchase one of the tiers for a desired service. After that, they get redirected to the checkout form, where they can fill in their details and make a payment. 

#### Technical details
In future, most of the parameters of each service will be customizable by website admin. So the following parameters should be stored in the database and loaded from the backend API: 
- Each service name, url (slug) and description. 
- Name and price of each tier. 
- Description of what’s included in the tier. 

We will use this template as the homepage: 
https://getbootstrap.com/docs/4.5/examples/jumbotron/ 
- Instead of each “Heading” column, display the services - so, the column names from left to right should correspond to three services. 
- Each service should have its name, slug and description (you can stick to any dummy text) loaded from the API. 

Clicking on the “View details” button, the user will get to the service page. Please use this template for it: 
https://getbootstrap.com/docs/4.5/examples/pricing/
- Instead of the “Pricing” header, display the service name. 
- Instead of the text under the “Pricing” header, display the service description.
- Display three tiers similarly to the template. For tier descriptions, also use dummy texts.
- Service name and description, tier prices and descriptions should be loaded from the API, according to the currently open service page. 
- A button for every tier should say “Buy now” and lead the user to the checkout page. 

We will use this template as checkout page: 
https://getbootstrap.com/docs/4.5/examples/checkout/ 
- The “your cart” section should display one item, showing correct service name, tier name and price. You can remove the “promo code” field. 
- Please reduce the number of fields in the form, to have only the following ones, validated as described: 
      - First name and Last name (Both required)
      - Email (Required and in correct format) 
      - Address (Required)
      - Country, State, Zip (Required)
      - Payment: keep only “Paypal” option and remove card details fields. 
- Once the user pushes the “Continue to checkout” button, given the form is valid, you just save all the user details in the database. You can display message about a success or an error as an alert with corresponding color and text: https://getbootstrap.com/docs/4.5/components/alerts/ 

We will end up having the following frontend pages: 
- Homepage: /
- Resume Writing: /services/resume-writing
- Career Coaching: /services/career-coaching
- Linkedin profile update: /services/linkedin-profile-update
- Checkout: /checkout

Requirements 
The app should have a React based frontend and Node.js based backend (REST API). Please use Express.js for the backend framework. For data storage, please use MongoDB.

### API Source
- Api git url: https://github.com/ganeshmkharvi/node-express-mongodb-job-search-api-server
- GET / POST services api url- http://localhost:3001/api/services 
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
- job-search-api-server repo:  https://github.com/ganeshmkharvi/node-express-job-search-api-server.git is cloned and running on your machine.

### Installation

1. Clone the repo :
   ```sh
   git clone https://github.com/ganeshmkharvi/react-job-search-portal.git
   ```
2. Install dependencies (use `sudo` if required) :

   ```sh
   npm install
   ```

3. Create `.env` file and configure :

   ```JS
   REACT_APP_BASE_API_URL = <REACT_APP_BASE_API_URL> 
    
  
  ```
   E.g. REACT_APP_BASE_API_URL = http://localhost:3001/api/

4. Start the server :
   ```sh
   npm start
   ```
   
