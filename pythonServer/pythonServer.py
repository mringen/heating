import RPi.GPIO as GPIO
from time import sleep
GPIO.setmode(GPIO.BCM)  # set up BCM GPIO numbering
# GPIO.setup(17, GPIO.OUT) # set GPIO 17 as output
import sys
import json


# try:
# 	GPIO.output(17, 1)
# 	sleep(0.1)
# 	GPIO.setup(17, GPIO.IN)
# except KeyboardInterrupt:
# 	GPIO.cleanup()

try:
	RELAIS_1_GPIO = int(sys.argv[2])
	GPIO.setup(RELAIS_1_GPIO, GPIO.OUT) # GPIO Assign mode
	# GPIO.output(RELAIS_1_GPIO, GPIO.HIGH) # on
	sleep(1)
	GPIO.output(RELAIS_1_GPIO, GPIO.LOW) # out
except KeyboardInterrupt:
	print("except KeyboardInterrupt, clean up")
	GPIO.cleanup()
finally:
   print("finally, clean up")
   GPIO.cleanup() # cleanup all GPIO
