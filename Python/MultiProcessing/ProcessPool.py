import concurrent.futures
import time

start = time.perf_counter()
def do_something(seconds):
    print(f'Sleeping {seconds} seconds ...')
    time.sleep(seconds)
#     print('Done sleeping ...')
    return f'Done sleeping ...{seconds}'

if __name__ == '__main__':
    with concurrent.futures.ProcessPoolExecutor() as executor:

        ''' -1- '''
        # f1 = executor.submit(do_something, 1)
        # f2 = executor.submit(do_something, 1)
        #
        # print(f1.result())
        # print(f2.result())

        ''' -2- '''
        # results = [executor.submit(do_something, 1) for _ in range(10)]
        # for f in concurrent.futures.as_completed(results):
        #     print(f.result())

        ''' -3- '''
        # secs = [5, 4, 3, 2, 1]
        # results = [executor.submit(do_something, sec) for sec in secs]
        # for f in concurrent.futures.as_completed(results):
        #     print(f.result())

        ''' -4- : map()'''
        secs = [5, 4, 3, 2, 1]
        results = executor.map(do_something, secs)
        # returns results in the order of start.

        for result in results:
            print(result)
        # print results in the order of start. Not in the order of completion

    finish = time.perf_counter()

    print(f'Finished in {round(finish-start, 2)} second(s).')