/* Reconfigured the circuit in 'Original.js'and rewrite the program to avoid disabling the LED matrix. 
Added code to demonstrate that the LED matrix is enabled. */

// Variables
led.enable(true) // LED enabled
pins.analogWritePin(AnalogPin.P1, 0) // P1
pins.analogWritePin(AnalogPin.P2, 0) // P2
pins.analogWritePin(AnalogPin.P8, 0) // P8

function displayLED() { // displayLED function
    let gestureVariable = 1 // Varaible declared and initialized
    basic.pause(200)
        if (gestureVariable == 1) { // If--conditional test 
            led.plot(2, 0) // Basic Plots and unplots
            led.plot(1, 1)
            led.plot(0, 2)
            led.plot(1, 3)
            led.plot(2, 4)
            led.plot(3, 3)
            led.plot(4, 2)
            led.plot(3, 1)
            basic.pause(300)
            basic.clearScreen()
            led.plot(2, 1)
            led.plot(3, 2)
            led.plot(2, 3)
            led.plot(1, 2)
            basic.pause(300)
            basic.clearScreen()
        }
        basic.clearScreen()
}

basic.forever(function () { // Forever Loop
    for (let index2 = 0; index2 <= 3071; index2++) { // Index For loop (Pins/LEDS)
        if (index2 < 2046) { // Conditionals
            if (index2 <= 1023) {
                pins.analogWritePin(AnalogPin.P1, index2)
            } else {
                pins.analogWritePin(AnalogPin.P1, 1023 - (index2 - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P1, 0)
        }
        if (index2 > 1023) {
            if (index2 <= 2046) {
                pins.analogWritePin(AnalogPin.P2, index2 - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P2, 1023 - (index2 - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P2, 0)
        }
        if (index2 < 1023) {
            pins.analogWritePin(AnalogPin.P8, 1022 - index2)
        } else if (index2 > 2048) {
            pins.analogWritePin(AnalogPin.P8, index2 - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        control.waitMicros(1000)
    }
    displayLED() // displayLED call
}) // End
