# TripleTen CodeJam 2023
#
# Team: Santa's Coders
# Marco Fernstaedt, Veronica Steele, Andrew Kwon
#
# In this project, our team designed a delivery route application where users can select a start location and up to seven destinations. 
# This project applies various methods to solving/estimating a small scale adaptation of the traveling salesman problem, or shortest Hamiltonian cycle.


# Libraries and packages
import pandas as pd
import random
import math
import time
from itertools import permutations
from geopy import distance


class Locations:
    # Initialization
    # Creates a pandas DataFrame from the provided filepath to the dataset
    # ex: '\datasets\cities_final.csv'
    def __init__(self, filepath: str):
        self.cities = pd.read_csv(filepath)
        self.all_coords = self.get_all_coords()

    # Function: get_all_cities()
    # Parameters:
    #   None
    # Returns:
    #   DataFrame of cities dataset
    def get_all_cities(self):
        return self.cities

    # Function: get_city_data(src, city_list)
    # Parameters:
    #   src: Start city  
    #   city_list: List of destination city names 
    # Returns:
    #   DataFrame slice of city name, state, population, latitude and longitiude
    def get_city_data(self, src: str, city_list: list):
        cities = [src] + city_list
        return self.cities.query('City in @cities')
    
    # Function: get_all_coords()
    # Parameters:
    #   None
    # Returns:
    #   Dictionary object of all city names and their location in latitude/longitude (tuple)
    def get_all_coords(self):
        all_coords = {}
        for index, row in self.cities.iterrows():
            all_coords[row['City']] = (row['Latitude'], row['Longitude'])
        return all_coords

    # Function: create_map(src, city_list)
    # Parameters:
    #   src: Start city
    #   city_list: List of destination cities
    # Returns:
    #   edges: Dictionary object of graph edges (all city pairs)
    #   weights: Dictionary objects containing the edge weights (great circle distance in nm) between each city pair
    #   coords: Dictionary object of each city (dtype string) and their location in latitude/longitude (tuple of float)
    def create_map(self, src: str, city_list: list):
        df_cities = self.get_city_data(src, city_list)
        num_cities = len(df_cities)
        edges = {}
        weights = {}
        coords = {}
        for i in range(num_cities):
            city_a = df_cities.iloc[i]
            weights[(city_a['City'], city_a['City'])] = 0
            edges[city_a['City']] = []
            coords[city_a['City']] = (city_a['Latitude'], city_a['Longitude'])
            for j in range(num_cities):
                if i != j:
                    city_b = df_cities.iloc[j]
                    edges[city_a['City']].append(city_b['City'])
                    weights[(city_a['City'], city_b['City'])] = distance.great_circle((city_a['Latitude'], city_a['Longitude']), (city_b['Latitude'], city_b['Longitude'])).nm
        return edges, weights, coords


class Route:
    def __init__(self, src: str, city_list: list, edges: dict, weights: dict):
        self.edges = edges
        self.weights = weights
        self.src = src
        self.dest = city_list

    # Function: get_route_cost(route)
    # Parameters:
    #   route: Hamiltonian route
    # Returns:
    #   cost: Tour cost in total distance
    def get_route_cost(self, route: list):
        curr = route[0]
        cost = 0
        for i in range(1, len(route)):
            next = route[i]
            cost += self.weights[(curr, next)]
            curr = next   
        return cost

    # Function: get_random_rte()
    # Parameters:  
    #   None
    # Returns:  
    #   route: Randomly generated route, starting and ending with the source node (dtype list)
    #   cost: The tour cost for the route in nautical miles (dtype float)
    #   calc_time: The algorithms process time (sum of system and CPU time) in nanoseconds (dtype float)
    def get_random_rte(self):
        t0 = time.process_time_ns()
        nodes = self.dest
        random.shuffle(nodes)
        route = [self.src] + nodes + [self.src]
        curr = route[0]
        cost = 0
        for i in range(1, len(route)):
            next = route[i]
            cost += self.weights[(curr, next)]
            curr = next
        t1 = time.process_time_ns()
        calc_time = t1 - t0
        return route, cost, calc_time

    # Function: get_greedy_rte()
    # Parameters:  
    #   None
    # Returns:  
    #   route: Route generated by selecting the next closest city from each node, starting at the source (dtpe list)
    #   cost: The tour cost for the route in nautical miles (dtype float)
    #   calc_time: The algorithms process time (sum of system and CPU time) in nanoseconds (dtype float)
    def get_greedy_rte(self):
        t0 = time.process_time_ns()
        visited = set()
        v = self.src

        route = []
        cost = 0
        while True:
            visited.add(v)
            route.append(v)
            min_cost = math.inf
            for u in self.edges[v]:
                if (u not in visited) and (self.weights[(v, u)] < min_cost):
                    min_cost = self.weights[(v, u)]
                    next_node = u
            if min_cost < math.inf:
                v = next_node
                cost += min_cost
            else:
                break
        route.append(self.src)
        cost += self.weights[(v, self.src)]
        t1 = time.process_time_ns()

        calc_time = t1 - t0
        return route, cost, calc_time

    # Function: get_2_opt_rte(route)
    # Parameters:  
    #   route: Input route, arbitrarily generated
    # Returns:  
    #   route: Heuristically generated route using 2-opt swapping (dtype list)
    #   cost: The tour cost for the route in nautical miles (dtype float)
    #   calc_time: The algorithms process time (sum of system and CPU time) in nanoseconds (dtype float)
    def get_2opt_rte(self, route: list):
        t0 = time.process_time_ns()
        curr_route = route
        best_distance = self.get_route_cost(curr_route)
        can_improve = True
        while can_improve:
            can_improve = False
            for i in range(1, len(route)-2):
                for j in range(i+1, len(route)):
                    if j-i == 1: continue
                    new_route = curr_route[:]
                    new_route[i:j] = curr_route[j-1:i-1:-1]
                    new_distance = self.get_route_cost(new_route)
                    if new_distance < best_distance:
                        curr_route = new_route
                        best_distance = new_distance
                        can_improve = True
        t1 = time.process_time_ns()
        calc_time = t1 - t0
        return curr_route, best_distance, calc_time

    # Function: get_exact_rte() 
    # Parameters:  
    #   None
    # Returns:  
    #   route: Route of exact shortest route, calculated via brute force (dtype list)
    #   cost: The tour cost for the route in nautical miles (dtype float)
    #   calc_time: The algorithms process time (sum of system and CPU time) in nanoseconds (dtype float)
    def get_exact_rte(self):
        t0 = time.process_time_ns()
        all_rtes = list(permutations(self.dest))
        best_rte = None
        min_cost = math.inf
        for rte in all_rtes:
            route = [self.src] + list(rte) + [self.src]
            curr = route[0]
            cost = 0
            for i in range(1, len(route)):
                next = route[i]
                cost += self.weights[(curr, next)]
                curr = next
            if cost < min_cost:
                min_cost = cost
                best_rte = route
        t1 = time.process_time_ns()
        calc_time = t1 - t0
        return best_rte, min_cost, calc_time