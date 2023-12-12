# RouteOptimizationCodeJam
Contributors:  Marco Fernstaedt, Veronica Steele, Andrew Kwon

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
- **expanded_nb.ipynb**: Expanded Jupyter notebook describing the project, dataset, and methods for comparing graph tour costs. Standalone file to run each algorithm without the use of an application.
- **driver_nb.ipynb**: Abbreviated notebook utilized as a driver file to caluclate routes.
- **route.py**: Python module for creating Locations and Route objects. Locations are initialized with the dataset and store the information as a pandas DataFrame. Route objects can be instantiated from Locations object deliverables. See documentation comments contained in the file for amplifying remarks.

# Requirements
The required libraries are contained in the route.py module, and are as follows:
- pandas (2.1.2)
- random
- math
- itertools.permutations
- geopy.distance (2.4.1)
