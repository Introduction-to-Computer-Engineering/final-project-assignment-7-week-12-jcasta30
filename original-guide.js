// Start with the SparkFun breakout board hookup guide. Build the circuit, using 3 LEDs of different colors.

led.enable(false) //False
pins.analogWritePin(AnalogPin.P4, 0) //P4
pins.analogWritePin(AnalogPin.P7, 0) //P7
pins.analogWritePin(AnalogPin.P10, 0) //P10

basic.forever(function () { // Forever Loop
    for (let index = 0; index <= 3071; index++) { 
        if (index < 2046) {
            if (index <= 1023) {
                pins.analogWritePin(AnalogPin.P4, index) //P4
            } else {
                pins.analogWritePin(AnalogPin.P4, 1023 - (index - 1023))
            }
        } else {
            pins.analogWritePin(AnalogPin.P4, 0)
        }
        if (index > 1023) {
            if (index <= 2046) {
                pins.analogWritePin(AnalogPin.P7, index - 1023) //P7
            } else {
                pins.analogWritePin(AnalogPin.P7, 1023 - (index - 2047))
            }
        } else {
            pins.analogWritePin(AnalogPin.P7, 0)
        }
        if (index < 1023) {
            pins.analogWritePin(AnalogPin.P10, 1022 - index) //P10
        } else if (index > 2048) {
            pins.analogWritePin(AnalogPin.P10, index - 2048)
        } else {
            pins.analogWritePin(AnalogPin.P10, 0)
        }
        control.waitMicros(1000)
    }
})