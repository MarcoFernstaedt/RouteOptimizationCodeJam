import sys
import json
from route import Locations, Route

try:
    with open(sys.argv[1]) as json_data:
        data = json.load(json_data)

    home = data['start']
    city_list = data['dest']
    algo_list = data['algos']

except:
    print('Error: invalid filename or JSON format')

cities = Locations('datasets\cities_final.csv')
edges, weights, coords = cities.create_map(home, city_list)
route = Route(home, city_list, edges, weights)

all_res = {}

for algo in algo_list:
    if algo == 'Random':
        rte, dist, calc_time = route.get_random_rte()
    elif algo == 'Greedy':
        rte, dist, calc_time = route.get_greedy_rte()
    elif algo == 'Exact':
        rte, dist, calc_time = route.get_exact_rte()
    elif algo == 'Hueristic':
        rte, dist, calc_time = route.get_2opt_rte()
    else:
        break
    rte_dict = {}
    for city in rte:
        rte_dict[city] = coords[city]
    res = {'Route': rte_dict,
           'Distance': dist,
           'Runtime': calc_time}
    all_res[algo] = res

results = json.dumps(all_res)

print(results)
with open("output.json", "w") as outfile:
    outfile.write(results)