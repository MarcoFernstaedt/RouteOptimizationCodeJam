# RouteOptimizationCodeJam
Contributors:  Marco Fernstaedt, Veronica Steele, Andrew Kwon

# Roles
- Marco Fernstaedt 
    - Back-end Developer
- Andrew Kwon
    - Data Scientist

# Introduction
In this project, our team designed a delivery route application where users can select a start location and several destinations cities. The application applies various methods for solving/estimating a small scale adaptation of the traveling salesman problem, or shortest Hamiltonian cycle. The following algorithms were used for comparative analysis:
- Random Hamiltonian cycle (baseline)
- Greedy Search
- Exact Shortest Path (brute force)
- K-optimal Tours

# Dataset
The dataset was dervied from the 2020 US census report. The original dataset (*us_cities.csv*) and a filtered version used for the project (*cities_final.csv*) are located in the datasets directory. The filtered dataset only includes 48 cities with populations over 400,000 people; the columns/dtypes are as follows:
- City (dtype object)
- State (dtype object)
- Population (dtype int)
- Latitude (dtype float)
- Longitude (dtype float)

# Usage
- **driver_nb.ipynb**: Jupyter notebook that demonstrates each graph traversal algorithm through the use of the route.py module. Includes simple EDA and visualization of each route.
- **route.py**: Python module for creating Locations and Route objects. Locations are initialized with the dataset and store the information as a pandas DataFrame. Route objects can be instantiated from Locations object deliverables. See documentation comments contained in the file for amplifying remarks.
- **script.py**: Python script for calculating user generated route queries. Takes a JSON file as a single command-line argument. The input file specifies start city, a list of destination cities, and a list of algorithms to use. Results are printed to stdout in JSON format as a string, and written to a JSON file (output.json).

# Requirements
The required libraries are contained in the route.py module, and are as follows:
- pandas (2.1.2)
- random
- math
- time
- itertools.permutations
- geopy.distance (2.4.1)
- sys
- json
