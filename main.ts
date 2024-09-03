function isNearly (reference: number, reading: number, tolerance: number) {
    if (reading >= reference - tolerance && reading <= reference + tolerance) {
        return true
    } else {
        return false
    }
}
Connected.oledClear()
notLegos.potSet(AnalogPin.P1)
notLegos.mp3setPorts(SerialPin.P14)
notLegos.mp3setPorts(SerialPin.P16)
notLegos.mp3setPorts(SerialPin.P16)
notLegos.setSounds("Mario")
basic.pause(notLegos.playsFor(notLegos.getSoundString("SFX", "Splash")))
notLegos.playBackground(notLegos.getSoundString("Music", "Level"))
basic.pause(5000)
notLegos.sendBackgroundVolume(30)
basic.pause(5000)
notLegos.stopBackgroundSound()
