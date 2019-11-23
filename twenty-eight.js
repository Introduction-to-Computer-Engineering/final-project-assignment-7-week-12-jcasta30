/* Having a functioning 5x5 LED matrix and 3 external LEDs, extended my favorite screensaver program to include the 
external LEDs into the changing pattern. */

// Variables
led.enable(true) //LED Enabled
pins.analogWritePin(AnalogPin.P1, 0) //P1
pins.analogWritePin(AnalogPin.P2, 0) //P2
pins.analogWritePin(AnalogPin.P8, 0) //P8 

function screensaver() { //screensaver Function
    let gestureVariable = 0
    pins.analogWritePin(AnalogPin.P8, 0)
    if (gestureVariable == 0) { // If--conditional test
        led.plot(0, 4) //Plots and Unplots
        basic.pause(200)
        led.unplot(0, 4)
        led.plot(0, 3)
        basic.pause(200)
        led.unplot(0, 3)
        led.plot(0, 2)
        basic.pause(200)
        led.unplot(0, 2)
        led.plot(0, 1)
        basic.pause(200)
        led.unplot(0, 1)
        led.plot(0, 0)
        basic.pause(200)
        led.unplot(0, 0)

        led.plot(1, 4)
        basic.pause(200)
        led.unplot(1, 4)
        led.plot(1, 3)
        basic.pause(200)
        led.unplot(1, 3)
        led.plot(1, 2)
        basic.pause(200)
        led.unplot(1, 2)
        led.plot(1, 1)
        basic.pause(200)
        led.unplot(1, 1)
        led.plot(1, 0)
        basic.pause(200)
        led.unplot(1, 0)

        led.plot(2, 4)
        basic.pause(200)
        led.unplot(2, 4)
        led.plot(2, 3)
        basic.pause(200)
        led.unplot(2, 3)
        led.plot(2, 2)
        basic.pause(200)
        led.unplot(2, 2)
        led.plot(2, 1)
        basic.pause(200)
        led.unplot(2, 1)
        led.plot(2, 0)
        basic.pause(200)
        led.unplot(2, 0)

        led.plot(3, 4)
        basic.pause(200)
        led.unplot(3, 4)
        led.plot(3, 3)
        basic.pause(200)
        led.unplot(3, 3)
        led.plot(3, 2)
        basic.pause(200)
        led.unplot(3, 2)
        led.plot(3, 1)
        basic.pause(200)
        led.unplot(3, 1)
        led.plot(3, 0)
        basic.pause(200)
        led.unplot(3, 0)

        led.plot(4, 4)
        basic.pause(200)
        led.unplot(4, 4)
        led.plot(4, 3)
        basic.pause(200)
        led.unplot(4, 3)
        led.plot(4, 2)
        basic.pause(200)
        led.unplot(4, 2)
        led.plot(4, 1)
        basic.pause(200)
        led.unplot(4, 1)
        led.plot(4, 0)
        basic.pause(200)
        led.unplot(4, 0)
    }
}

basic.forever(function () { // Forever Loop 
    for (let index = 0; index <= 3071; index++) { // Index For Loop
        if (index < 2046) { //Conditionals
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P1, index)
            } else {
                pins.analogWritePin(AnalogPin.P1, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P1, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P2, index - 1023)
            } else {
                pins.analogWritePin(AnalogPin.P2, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P2, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P8, 1022 - index)
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P8, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P8, 0)
        }
        control.waitMicros(1000)
    }
    screensaver() // screensaver call
    basic.pause(200)
}) //End
