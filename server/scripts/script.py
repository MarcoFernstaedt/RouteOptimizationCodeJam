import sys
import json
from route import Locations, Route

args = sys.argv[1:]

if len(args) == 1:
    args = args[0].split(',')

home = args[0].strip()
algo = args.pop().strip()
city_list = []
for i in range(1, len(args)):
    city_list.append(args[i].strip())

'''
try:
    data = json.loads(json_data)
    home = data["start"]
    city_list = data["dest"]
    algo = data["algo"]

except:
    print('Error: Invalid JSON format. Make sure JSON keys and values are wrapped in single quotes')
'''

cities = Locations('datasets\cities_final.csv')
edges, weights, coords = cities.create_map(home, city_list)
route = Route(home, city_list, edges, weights)

if algo == 'Random':
    rte, dist, calc_time = route.get_random_rte()
elif algo == 'Greedy':
    rte, dist, calc_time = route.get_greedy_rte()
elif algo == 'Hueristic':
    rte, dist, calc_time = route.get_2opt_rte()
else:
    rte, dist, calc_time = route.get_exact_rte()

rte_coords = []
for city in rte:
    rte_coords.append(coords[city])
res = {'route': rte,
       'coords': rte_coords,
       'distance': dist,
       'runtime': calc_time}

results = json.dumps(res)
print(results)

# remove comments to write the output as a json file to the local directory
#with open("output.json", "w") as outfile:
#   outfile.write(results)