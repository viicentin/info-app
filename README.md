# Country Info App

## Overview

The Country Info App is a full-stack application that allows users to view detailed information about countries. It features an Express.js backend and a React.js frontend. Users can explore country data such as population graphs, flag images, and neighboring countries. The app is designed to be responsive and user-friendly.

## Features

- **List of Countries:** View an alphabetically sorted list of countries.
- **Country Details:** Get detailed information about a selected country, including its flag, population graph, and neighboring countries.
- **Responsive Design:** The application is designed to be responsive and adjusts to various screen sizes.

## Technologies Used

- **Frontend:**
  - React.js 
  - Axios for API requests
  - Chart.js for data visualization
  - CSS for styling

- **Backend:**
  - Express.js
  - Axios for API requests

- **APIs Used:**
  - [Date.nager.at](https://date.nager.at/api/v3/AvailableCountries) for country information
  - [CountriesNow](https://countriesnow.space) for population data and flag images

## Setup

### Frontend

1. **Clone the repository:**

   git clone https://github.com/viicentin/Country-Info-App.git
   cd Country-Info-App/frontend

2. **Install dependencies:**
npm install

4. **Create a .env file in the frontend directory with the following content:**
REACT_APP_API_URL=http://localhost:5000/api

5. **Run the development server:**
npm start

This will start the React development server on http://localhost:3000.

### Backend

**Navigate to the backend directory:**
cd Country-Info-App/backend

**Install dependencies:**
npm install

**Create a .env file in the backend directory with the following content:**
PORT=5000

**Run the server:**
npm start

This will start the Express server on http://localhost:5000.

## Usage

Open your browser and navigate to http://localhost:3000 to access the frontend of the application.

Use the interface to explore the list of countries.

Click on a country to view detailed information, including the population graph and neighboring countries.

## Development

To make changes or contribute to the project, follow these steps:

**Create a new branch:**
git checkout -b feature-branch

**Make your changes and commit them:**

git add .
git commit -m "Add new feature"

**Push your changes:**

git push origin feature-branch

Create a pull request on GitHub to merge your changes into the main branch.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

React for building user interfaces

Express.js for building the backend

Chart.js for creating charts

Axios for making HTTP requests

Date.nager.at for country data

CountriesNow for population and flag data
