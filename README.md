# CSV file reader

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Features: 
 - upload a csv file that respects the schema from the data folder or here[http://eforexcel.com/wp/downloads-18-sample-csv-files-data-sets-for-testing-sales/]
 - tabular representation of the data from the CSV file
 - creation of new data records using the same schema
 - delete existing records, sorting by column (display data only - doesn't keep the sorting when exporting to csv)
 - bar chart for percentage of sales by region
 - export all data as a CSV file with the same schema

## Technical Implementation

This project uses:
- Context API and useReducer for managing the data flow
- ant design library for ui components
- react-papaparse for CSV processing
- victory for the bar chart 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
