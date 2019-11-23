// This program will light up an external LED when a 1 is detected on the input button (that is, the button is pressed).

led.enable(false) // Disable LED matrix

basic.forever(function () { 
    if (pins.digitalReadPin(DigitalPin.P12) == 1) // if button is pushed
    {
        pins.analogWritePin(AnalogPin.P8, 1023) // Light up LED
    }
    else 
    { // if button is not pushed 
        pins.analogWritePin(AnalogPin.P8, 0) //  LED/light is off
    }
})
