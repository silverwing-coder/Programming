import threading
import time

start = time.perf_counter()

def do_something(seconds):
    print(f'Sleeping {seconds} second ....')
    time.sleep(seconds)
    print('Done sleeping ...')

''' no thread: serial execution '''
# do_something()
# do_something()

''' threaded execution'''
# t1 = threading.Thread(target=do_something, args=[1, ])
# t2 = threading.Thread(target=do_something, args=[1, ])
# t1.start()
# t2.start()

# synchronize with the main process
# t1.join()
# t2.join()

''' multiple threads by for loop'''
threads = []
for _ in range(10):

    # t = threading.Thread(target=do_something())   # same as synchronous execution
    t = threading.Thread(target=do_something, args=[1.5, ])
    t.start()
    threads.append(t)

for thread in threads:
    thread.join()

finish = time.perf_counter()

print(f'Finished {round(finish-start, 2)} second(s)')