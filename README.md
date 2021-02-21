# CSV file reader

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Features: 
 - upload a csv file that respects the schema from the data folder or [here](http://eforexcel.com/wp/downloads-18-sample-csv-files-data-sets-for-testing-sales/)
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

Strong points: 
- Context API and useReducer hook allows for separation of concerns between state data processing and React components. 
- Container and presentation components pattern makes the code more readable, maintainable and easier to extend. 
- separate css file for each component and use of BEM rules allows for better component encapsulation
- fast and easy to upload and read data with pagination, sticky table header and ability to sort each column.
- responsive design

Improvements consideration: 
- implement edit record
- allow searching table records by certain columns
- export sorted or filtered data
- add more sales relevant chart data
- add some unit tests and integration tests for core functionality
- add PropTypes or Typescript to document the code better
- camelcase properties on the JSON data from the CSV file for easier manipulation 
- respect [Git WorkFlow](https://www.atlassian.com/git/tutorials/comparing-workflows) way of commiting code to the repo, and conventional commits.

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
