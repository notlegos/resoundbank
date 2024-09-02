function isNearly (reference: number, reading: number, tolerance: number) {
    if (reading >= reference - tolerance && reading <= reference + tolerance) {
        return true
    } else {
        return false
    }
}
function potRead () {
    thePotSays = pins.map(
    Connected.trimpot(Connected.AnalogRJPin.J1),
    0,
    1023,
    0,
    1
    )
    return thePotSays
}
Connected.buttonEvent(Connected.DigitalRJPin.J2, Connected.ButtonStateList.C, function () {
    basic.pause(notLegos.playsFor("1_2_100_1.5"))
})
let thePotSays = 0
Connected.oledClear()
notLegos.potSet(AnalogPin.P1)
notLegos.mp3setPorts(SerialPin.P14)
notLegos.mp3setPorts(SerialPin.P16)
basic.pause(notLegos.playsFor("1_1_100_1.5"))
basic.pause(notLegos.playsFor("1_1_50_1.5"))
basic.pause(notLegos.playsFor("1_1_100_1.5"))
basic.pause(notLegos.playsFor("1_1_50_1.5"))
loops.everyInterval(500, function () {
	
})
