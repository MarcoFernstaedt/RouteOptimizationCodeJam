# RouteOptimizationCodeJam
Contributors: Marco Fernstaedt, Veronica Steele, Andrew Kwon

## Roles
- **Marco Fernstaedt**
  - *Software Engineer*
- **Veronica Steele**
  - *Front-end Developer*
- **Andrew Kwon**
  - *Data Scientist*

## Introduction
In this project, our team designed a delivery route application where users can select a start location and several destinations cities. The application applies various methods for solving/estimating a small scale adaptation of the traveling salesman problem, or shortest Hamiltonian cycle. The following algorithms were used for comparative analysis:

### Algorithms Used
- Random Hamiltonian cycle (baseline)
- Greedy Search
- Exact Shortest Path (brute force)
- K-optimal Tours

## Andrew Kwon: Data Scientist

### Dataset
The original dataset was dervied from the 2020 US census report. The data descibes the location in latitude-longitude, state, counties, and name for over 20,000 US cities. While the dataset was complete with no missing values, we filtered out cities with populations of less than 400,000 in order to provide users a simplified list of popular destination cities from which to create a route. While the only information used for our route calculations were the city names and their geodetic position, all of the columns were retained with the exception of counties within each city's limit and city type. The resulting dataset has 48 cities with associated state, population, and coordinate location. Both the original (*us_cities.csv*) and filtered (*cities_final.csv*) datasets are retained the datasets directory.The columns/dtypes used in the project are as follows:
- City (dtype object)
- State (dtype object)
- Population (dtype int)
- Latitude (dtype float)
- Longitude (dtype float)

### Usage
- **report_nb.ipynb**: Jupyter notebook that demonstrates each graph traversal algorithm through the use of the route.py module. All reporting, EDA, and route visualizations are contained therein.
- **route.py**: Python module for creating Locations and Route objects. Locations are initialized with the dataset and store the information as a pandas DataFrame. Route objects can be instantiated from Locations object deliverables. See documentation comments contained in the file for amplifying remarks.
- **script.py**: Python script for calculating user generated route queries. Takes a JSON-style string as a single command-line argument. The keys specify start city, a list of destination cities, and the desired algorithm name to use for route calculation. Results are printed to stdout in JSON format as a string. Minor edits can be made to allow intake of a JSON file in the command line argument, as well as writting the output to a JSON file.

### Requirements
The required libraries are contained in the route.py module, and are as follows:
- pandas (2.1.2)
- random
- math
- time
- itertools.permutations
- geopy.distance (2.4.1)
- sys
- json

## Marco Fernstaedt: Software Engineer

### Server
**Technologies**
- Node.js
- Express.js
- Helmet (Security Measure)
- Python

### Server Structure
- **app.js**: Express server and middleware handling routes.
- **controllers**
  - **submitForm.js** Controller for the `/submit-form` route.
- **routes/**
  - **index.js**: Routes for various paths.
  - **submitForm.js**: Routes for various submit-form paths.
- **utils**
  - **errors.js**: Containes error status codes.
  - **pythonRunner.js**: function to run python scripts.

### Controller
- **submitForm.js**: Controller for the `/submit-form` route. Extracts user data and passes it to Python scripts. Python scripts return cities, distance, and algorithm runtime.

## Client
My roll on the client side consist of a variety of task.
**Task**

- implimented form elements.
- created layout for header/main/sidebar/iframe
- created fetch request
- implimented JavaScript into the form.

### Deployment
This project will be deployed on AWS upon completion.
still in progress


### Set up Instructrions

1. download repository onto your machine.
2. open the repo in a Code Editor (VSCode)
3. opem the terminal (if in VSCode Ctrl + j)
4. move into server directory command: cd client
5. run npm install
6. change directory to server using: cd ../server
7. inisiate server: npm run dev
8. open a second terminal to run the client (if VSCode Ctrl + Shift + 5)
9. enter the terminal with a mouse click and run: npm run dev

### Connect with Us

- [GitHub - Marco Fernstaedt](https://github.com/MarcoFernstaedt)
- [LinkedIn - Marco Fernstaedt](https://www.linkedin.com/in/marco-f-19a372219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtABxipo9S0iGUo9Hp968eA%3D%3D)
- [GitHub - Andrew Kwon](https://github.com/adkwn1)
- [LinkedIn - Andrew Kwon](https://www.linkedin.com/in/andrew-kwon-913849261/)
