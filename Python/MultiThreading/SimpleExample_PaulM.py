from time import *
from threading import Thread

def myBox(delayT):
    while True:
        print('....... My box is open')
        sleep(delayT)
        print('....... My box is closed')
        sleep(delayT)

def myLED(delayT):
    while True:
        print('My LED is on')
        sleep(delayT)
        print('My LED is off')
        sleep(delayT)

delayBox = 3
delayLed = 1

# if there is one argument, you must add comma in args
boxThread = Thread(target = myBox, args=(delayBox, ))
ledThread = Thread(target = myLED, args=(delayLed, ))

boxThread.daemon = True
ledThread.daemon = True

boxThread.start()
ledThread.start()

j = 0
while True:
    print(j)
    j += 1
    sleep(.5)
