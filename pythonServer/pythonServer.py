import RPi.GPIO as GPIO
from time import sleep
GPIO.setmode(GPIO.BCM)  # set up BCM GPIO numbering
# GPIO.setup(17, GPIO.OUT) # set GPIO 17 as output


# try:
# 	GPIO.output(17, 1)
# 	sleep(0.1)
# 	GPIO.setup(17, GPIO.IN)
# except KeyboardInterrupt:
# 	GPIO.cleanup()


try:
	RELAIS_1_GPIO = 23
	GPIO.setup(RELAIS_1_GPIO, GPIO.OUT) # GPIO Assign mode
	GPIO.output(RELAIS_1_GPIO, GPIO.HIGH) # on
	print ("try, Port 23 is closed ")
	sleep(1)
	GPIO.output(RELAIS_1_GPIO, GPIO.LOW) # out
	print ("try, Port 23 is closed ")
except KeyboardInterrupt:
	print("except KeyboardInterrupt, clean up")
	GPIO.cleanup()
finally:
   print("finally, clean up")
   GPIO.cleanup() # cleanup all GPIO
