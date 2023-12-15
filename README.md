# RouteOptimizationCodeJam
Contributors: Marco Fernstaedt, Veronica Steele, Andrew Kwon

## Roles
- **Marco Fernstaedt**
  - *Back-end Developer*
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
The dataset was dervied from the 2020 US census report. The original dataset (*us_cities.csv*) and a filtered version used for the project (*cities_final.csv*) are located in the datasets directory. The filtered dataset only includes 48 cities with populations over 400,000 people; the columns/dtypes are as follows:
- City (dtype object)
- State (dtype object)
- Population (dtype int)
- Latitude (dtype float)
- Longitude (dtype float)

### Usage
- **driver_nb.ipynb**: Jupyter notebook that demonstrates each graph traversal algorithm through the use of the route.py module. Includes simple EDA and visualization of each route.
- **route.py**: Python module for creating Locations and Route objects. Locations are initialized with the dataset and store the information as a pandas DataFrame. Route objects can be instantiated from Locations object deliverables. See documentation comments contained in the file for amplifying remarks.
- **script.py**: Python script for calculating user generated route queries. Takes a JSON-style string as a single command-line argument. The keys specify start city, a list of destination cities, and the desired algorithm name to use for route calculation. Results are printed to stdout in JSON format as a string, and can also be written to a JSON file (output.json) by un-commenting the appropriate code line.

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
- Helmet (Securit Measurey)
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

### Deployment
This project will be deployed on AWS upon completion.

### Connect with Us

- [GitHub - Marco Fernstaedt](https://github.com/MarcoFernstaedt)
- [LinkedIn - Marco Fernstaedt](https://www.linkedin.com/in/marco-f-19a372219?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BtABxipo9S0iGUo9Hp968eA%3D%3D)
- [GitHub - Andrew Kwon](https://github.com/adkwn1)
- [LinkedIn - Andrew Kwon](https://www.linkedin.com/in/andrew-kwon-913849261/)
