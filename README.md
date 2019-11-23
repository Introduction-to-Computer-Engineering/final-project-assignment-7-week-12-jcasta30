# CPE 1040 - Introduction to Computer Engineering
# Assignment 7, Part 1

## Project Write-Ups

### LEDs: 
1. original.js: In this assignment we were tasked to build the circuit from the SparkFun breakout board hookup guide. In result, we have 3 LEDs of different colors cycling through each other in a sequence, with the use of the micro-bit pins and the proper orientation of all parts.

    URL: https://imgur.com/gallery/meuADCS

2. enable-matrix.js: In this assignment we were asked to reconfigure the circuit in 'Original.js' and rewrite the program to avoid disabling the LED matrix. As well as add code to demonstrate that the LED matrix is enabled. The correct 3 pins had to be selected from the micro:bit GPIO function table. My program will display alternating diamonds to demonstrate the LED matrix is enabled, and start the reconfigured cycling LED code/ciruit, that cycles through the LEDs. 
   
   URL: https://imgur.com/gallery/lHFkJzb

3. twenty-eight.js: In this assignment we were asked to extend our favorite screensaver program to include the external LEDs into the changing pattern, having of course a functioning 5x5 LED matrix and 3 external LEDs. My program will illuminate my screensaver that displays vertical-upward waves, then starts the reconfigured cycling LED code/ciruit, that cycles through the LEDs. 

    URL: https://imgur.com/gallery/6skWQAD

### Soil Sensor:
1. digital-in.js: For this assignment (Keeping at least one analog output pin) we were tasked to open a digital input pin and hook it up to a TTL input button on the workstation. My assignment will Light the external LED when you detect a 1 on the input button (that is, the button is pressed). 

    URL: https://imgur.com/gallery/ESHzJ0I

2. manual-calibration.js: For this assigment, using the soil moisture sensor, we were tasked to write a program that allows us to manually calibrate the sensor, and read in the sensor's data. We mapped the range of input values of the sensor to the range 0-4. For the minimum value, we took a reading with a dry sensor not touching anything; Followed by taking a reading with the sensor prongs dipped in shallow water, for the maximum value. When the sensor takes a sensor reading, it lights up as many rows of the LED matrix as correspond to the rescaled magnitude of the reading.

    URL:

3. auto-calibration.js: This assigment is similar as the last, we were tasked to construct a program that does the calibration programmatically, rather than manually. When the program starts, it prompts the user to take three readings of the low and three readings of the high values of the range. It starts by showing the South icon image to prompt the user to take a low value, and records it. Then, it shows the North icon image to prompt the user to take a high value, and records it. This will be repeated for a total of three eadings for each. It takes the average of the low values and sets the range minimum to that value. It does the same for the range maximum. Lastly, it will perform the mapping, exit the calibration subprogram, scroll "Calibration success" once, and starts normal operation described in the previous task.

    URL:
