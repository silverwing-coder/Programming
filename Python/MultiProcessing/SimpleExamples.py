import time
import multiprocessing

start = time.perf_counter()
def do_something(seconds) -> None:
    print(f'Sleeping {seconds} second ...')
    time.sleep(seconds)
    print('Done Sleeping ...')

# do_something()
# do_something()
if __name__ == '__main__':

    ''' -1- '''
    # p1 = multiprocessing.Process(target=do_something)
    # p2 = multiprocessing.Process(target=do_something)
    # p1.start()
    # p2.start()

    # p1.join()
    # p2.join()

    ''' -2- '''
    # processes: list = []
    # for _ in range(10):
    #     p = multiprocessing.Process(target=do_something, args=[1.5, ])
    #     p.start()
    #     processes.append(p)
    # for p in processes:
    #     p.join()

    ''' -3- '''
    processes: list = []
    for _ in range(10):
        p = multiprocessing.Process(target=do_something, args=[1.5, ])
        p.start()
        processes.append(p)
    for p in processes:
        p.join()

    finish = time.perf_counter()

    print(f'Finished in {round(finish - start, 2)} second(s)')