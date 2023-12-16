# RouteOptimizationCodeJam

Contributors: Marco Fernstaedt, Veronica Steele, Andrew Kwon

## Roles

- **Marco Fernstaedt**
  - _Back-end Developer_
- **Veronica Steele**
  - _Front-end Developer_
- **Andrew Kwon**
  - _Data Scientist_

## Introduction

In this project, our team designed a delivery route application where users can select a start location and several destinations cities. The application applies various methods for solving/estimating a small scale adaptation of the traveling salesman problem, or shortest Hamiltonian cycle. The following algorithms were used for comparative analysis:

### Algorithms Used

- Random Hamiltonian cycle (baseline)
- Greedy Search
- Exact Shortest Path (brute force)
- K-optimal Tours

## Andrew Kwon: Data Scientist

### Dataset

The original dataset was dervied from the 2020 US census report. The data descibes the location in latitude-longitude, state, counties, and name for over 20,000 US cities. While the dataset was complete with no missing values, we filtered out cities with populations of less than 400,000 in order to provide users a simplified list of popular destination cities from which to create a route. While the only information used for our route calculations were the city names and their geodetic position, all of the columns were retained with the exception of counties within each city's limit and city type. The resulting dataset has 48 cities with associated state, population, and coordinate location. Both the original (_us_cities.csv_) and filtered (_cities_final.csv_) datasets are retained the datasets directory.The columns/dtypes used in the project are as follows:

- City (dtype object)
- State (dtype object)
- Population (dtype int)
- Latitude (dtype float)
- Longitude (dtype float)

### Usage

- **report_nb.ipynb**: Jupyter notebook that demonstrates each graph traversal algorithm through the use of the route.py module. All reporting, EDA, and route visualizations are contained therein.
- **route.py**: Python module for creating Locations and Route objects. Locations are initialized with the dataset and store the information as a pandas DataFrame. Route objects can be instantiated from Locations object deliverables. See documentation comments contained in the file for amplifying remarks.
- **script.py**: Python script for calculating user generated route queries. Takes a single string command-line argument OR individual string arguments in the following order: *starting city*, *destinations*, *algorithm name*. Ex: "Houston, New York, Chicago, Greedy" is equivalent to "Houston" "New York" "Chicago" "Greedy". Results are printed to stdout in JSON format as a string. Minor edits can be made to allow intake of a JSON file in the command line argument, as well as writting the output to a JSON file.

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

## Marco Fernstaedt: Back-End Engineer

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

## Veronica Steele: Front-End Engineer

## Format

- uses a sidebar form to select city inputs (up to 7 accepted) and algorithms (up to 2). -\*\* layout incorporates an iframe sourced to Google Maps for easier user navigation.
- header and footer included for visibility and user appeal.

## Scripts

- index.html - site structure and form
- index.css - site layout and UI
- index.js - error display handling, button functionality and api calls

### Deployment

This project will be deployed on AWS upon completion.

### Connect with Us

- [GitHub - Marco Fernstaedt](https://github.com/MarcoFernstaedt)
- [LinkedIn - Marco Fernstaedt](https://www.linkedin.com/in/marco-f-19a372219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtABxipo9S0iGUo9Hp968eA%3D%3D)
- [GitHub - Andrew Kwon](https://github.com/adkwn1)
- [LinkedIn - Andrew Kwon](https://www.linkedin.com/in/andrew-kwon-913849261/) -[Github - Veronica Steele](https://github.com/VeronicaSteele?tab=repositories) -[LinkedIn - Veronica Steele](https://www.linkedin.com/in/veronica-steele/)
