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
let thisRead = 0
let thePotSays = 0
let theSound = ""
Connected.MP3SetPort(Connected.DigitalRJPin.J3)
Connected.execute(Connected.playType.Stop)
Connected.MP3SetPort(Connected.DigitalRJPin.J4)
Connected.execute(Connected.playType.Stop)
let relativeVolumeA = 0
let relativeVolumeB = 0
let songNumber = -1
let volumeA = -1
let volumeB = -1
let playlistLevel: number[] = []
let lastRead = potRead()
notLegos.setPlayer("Mario")
Connected.showUserText(2, notLegos.playSound("Yay"))
Connected.showUserText(3, notLegos.playMusic("Level"))
Connected.showUserText(4, notLegos.playSFX(5))
Connected.showUserText(5, notLegos.playVoice(3))
relativeVolumeB = parseFloat(theSound.split("_")[2]) / 100
basic.pause(Math.min(0, notLegos.playsFor(theSound, potRead(), notLegos.DigitalRJPin.J4)))
relativeVolumeA = parseFloat(theSound.split("_")[2]) / 100
Connected.showUserText(1, theSound)
basic.pause(notLegos.playsFor(theSound, potRead(), notLegos.DigitalRJPin.J3))
loops.everyInterval(100, function () {
    thisRead = potRead()
    if (!(isNearly(thisRead, lastRead, 0.01))) {
        lastRead = thisRead
        notLegos.volumeQuickPort(convertToText(30 * (thisRead * relativeVolumeA)), notLegos.DigitalRJPin.J3)
        notLegos.volumeQuickPort(convertToText(30 * (thisRead * relativeVolumeB)), notLegos.DigitalRJPin.J4)
    }
})
