import concurrent.futures
import time

start = time.perf_counter()

def do_something(seconds):
    print(f'Sleeping {seconds} second ....')
    time.sleep(seconds)
    return f'Done sleeping ... {seconds}'

''' method 1 '''
# with concurrent.futures.ThreadPoolExecutor() as executor:
#     f1 = executor.submit(do_something, 1)
#     f2 = executor.submit(do_something, 1)
#     print(f1.result())
#     print(f2.result())

''' method 2 '''
# with concurrent.futures.ThreadPoolExecutor() as executor:
#     # results = [executor.submit(do_something, 1) for _ in range(10)]
#
#     secs = [5, 4, 3, 2, 1]
#     results = [executor.submit(do_something, sec) for sec in secs]
#
#     for f in concurrent.futures.as_completed(results):
#         print(f.result())

''' method 3 '''
with concurrent.futures.ThreadPoolExecutor() as executor:
    secs = [5, 4, 3, 2, 1]
    ''' submit() returns feature methods, 
    map() returns results in the order of started'''
    results = executor.map(do_something, secs)

    for result in results:
        print(result)


finish = time.perf_counter()

print(f'Finished {round(finish-start)} second(s)')