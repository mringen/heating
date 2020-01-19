import RPi.GPIO as GPIO
from time import sleep
GPIO.setmode(GPIO.BCM)  # set up BCM GPIO numbering
GPIO.setup(17, GPIO.OUT)
# GPIO.setup(27, GPIO.OUT) # set GPIO 25 as input

# try:
# 	while True:            # this will carry on until you hit CTRL+C
# 		if GPIO.input(17): # if port 25 == 1
# 			print ("Port 17 is open = " + str(GPIO.input(17)))
# 			GPIO.output(17, 1)
# 		else:
# 			print ("Port 17 is " + str(GPIO.input(17)))
# 			sleep(0.5)         # wait 0.5 seconds
#
# except KeyboardInterrupt:
# 	GPIO.cleanup()         # clean up after yourself

try:
	GPIO.output(17, 1)
	sleep(3)
	GPIO.setup(17, GPIO.IN)
except KeyboardInterrupt:
	GPIO.cleanup()
