function isNearly (reference: number, reading: number, tolerance: number) {
    if (reading >= reference - tolerance && reading <= reference + tolerance) {
        return true
    } else {
        return false
    }
}
function playMusic (genre: string) {
    if (genre == "Level") {
        if (playlistLevel.length == 0) {
            playlistLevel = shuffleList(mbLevel)
        }
        theSound = playlistLevel.shift()
    } else {
    	
    }
    relativeVolumeB = parseFloat(theSound.split("_")[2]) / 100
    basic.pause(Math.min(0, notLegos.playsFor(theSound, potRead(), notLegos.DigitalRJPin.J4)))
}
function PlaySound (category: string) {
    if (category == "Name") {
        if (playlistName.length == 0) {
            playlistName = shuffleList(sbName)
        }
        theSound = playlistName.shift()
    } else if (category == "Ready") {
        if (playlistReady.length == 0) {
            playlistReady = shuffleList(sbReady)
        }
        theSound = playlistReady.shift()
    } else if (category == "Yay") {
        if (playlistYay.length == 0) {
            playlistYay = shuffleList(sbYay)
        }
        theSound = playlistYay.shift()
    } else if (category == "Nay") {
        if (playlistNay.length == 0) {
            playlistNay = shuffleList(sbNay)
        }
        theSound = playlistNay.shift()
    } else if (category == "Ouch") {
        if (playlistOuch.length == 0) {
            playlistOuch = shuffleList(sbOuch)
        }
        theSound = playlistOuch.shift()
    } else if (category == "Success") {
        if (playlistSuccess.length == 0) {
            playlistSuccess = shuffleList(sbSuccess)
        }
        theSound = playlistSuccess.shift()
    } else if (category == "Failure") {
        if (playlistFailure.length == 0) {
            playlistFailure = shuffleList(sbFailure)
        }
        theSound = playlistFailure.shift()
    } else if (category == "Won") {
        if (playlistWon.length == 0) {
            playlistWon = shuffleList(sbWon)
        }
        theSound = playlistWon.shift()
    } else if (category == "Lost") {
        if (playlistLost.length == 0) {
            playlistLost = shuffleList(sbLost)
        }
        theSound = playlistLost.shift()
    } else if (category == "Hurry") {
        if (playlistHurry.length == 0) {
            playlistHurry = shuffleList(sbHurry)
        }
        theSound = playlistHurry.shift()
    } else if (category == "Correct") {
        if (playlistCorrect.length == 0) {
            playlistCorrect = shuffleList(sbCorrect)
        }
        theSound = playlistCorrect.shift()
    } else if (category == "Incorrect") {
        if (playlistIncorrect.length == 0) {
            playlistIncorrect = shuffleList(sbIncorrect)
        }
        theSound = playlistIncorrect.shift()
    }
    relativeVolumeA = parseFloat(theSound.split("_")[2]) / 100 / 100
    Connected.showUserText(1, theSound)
    basic.pause(notLegos.playsFor(theSound, potRead(), notLegos.DigitalRJPin.J3))
}
function printArray (toPrint: any[]) {
    lineCount = toPrint.length
    Connected.oledClear()
    Connected.showUserNumber(8, lineCount)
    if (lineCount > 0) {
        for (let thisLine = 0; thisLine <= lineCount - 1; thisLine++) {
            Connected.showUserText(thisLine + 1, toPrint[thisLine])
        }
    } else {
        Connected.showUserText(1, "[Empty]")
    }
}
Connected.buttonEvent(Connected.DigitalRJPin.J2, Connected.ButtonStateList.D, function () {
    if (songNumber > 0) {
        songNumber = songNumber - 1
    }
    Connected.showUserText(2, mbLevel[songNumber])
    basic.pause(notLegos.playsFor("", potRead(), notLegos.DigitalRJPin.J4) + 300)
    Connected.showUserNumber(3, notLegos.playsFor("", potRead(), notLegos.DigitalRJPin.J4))
})
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
function shuffleList (listIn: string[]) {
    listCopy = []
    for (let value of listIn) {
        listCopy.push(value)
    }
    listOut = ["temp"]
    while (listCopy.length > 0) {
        thisItem = listCopy._pickRandom()
        listOut.push(thisItem)
        listCopy.removeAt(listCopy.indexOf(thisItem))
    }
    listOut.shift()
    return listOut
}
function setSounds (player: string) {
    soundString = notLegos.playerSoundString(player)
    sbName = []
    sbReady = []
    sbYay = []
    sbIntro = []
    sbNay = []
    sbOuch = []
    sbSuccess = []
    sbFailure = []
    sbWon = []
    sbLost = []
    sbHurry = []
    stringParts = soundString.split("|")
    for (let value2 of stringParts) {
        thisLetter = value2.charAt(0)
        theSound = value2.substr(2, value2.length - 2)
        if (thisLetter == "A") {
            sbName.push(theSound)
        } else if (thisLetter == "R") {
            sbReady.push(theSound)
        } else if (thisLetter == "Y") {
            sbYay.push(theSound)
        } else if (thisLetter == "I") {
            sbIntro.push(theSound)
        } else if (thisLetter == "N") {
            sbNay.push(theSound)
        } else if (thisLetter == "O") {
            sbOuch.push(theSound)
        } else if (thisLetter == "S") {
            sbSuccess.push(theSound)
        } else if (thisLetter == "F") {
            sbFailure.push(theSound)
        } else if (thisLetter == "W") {
            sbWon.push(theSound)
        } else if (thisLetter == "L") {
            sbLost.push(theSound)
        } else if (thisLetter == "H") {
            sbHurry.push(theSound)
        }
    }
}
Connected.buttonEvent(Connected.DigitalRJPin.J2, Connected.ButtonStateList.C, function () {
    songNumber = songNumber + 1
    Connected.showUserText(2, mbLevel[songNumber])
    basic.pause(notLegos.playsFor("", potRead(), notLegos.DigitalRJPin.J4) + 300)
    Connected.showUserNumber(3, notLegos.playsFor("", potRead(), notLegos.DigitalRJPin.J4))
})
function setMusic (player: string) {
    musicString = notLegos.playerMusicString("Mario")
    mbTutorial = []
    mbIntro = []
    sbVoices = []
    mbAwaiting = []
    mbLevel = []
    mbWon = []
    mbLost = []
    sbCorrect = []
    sbIncorrect = []
    sbDoom = []
    sbSFX = []
    stringParts = musicString.split("|")
    for (let value3 of stringParts) {
        thisLetter = value3.charAt(0)
        theSound = value3.substr(2, value3.length - 2)
        if (thisLetter == "T") {
            mbTutorial.push(theSound)
        } else if (thisLetter == "N") {
            mbIntro.push(theSound)
        } else if (thisLetter == "V") {
            sbVoices.push(theSound)
        } else if (thisLetter == "A") {
            mbAwaiting.push(theSound)
        } else if (thisLetter == "E") {
            mbLevel.push(theSound)
        } else if (thisLetter == "O") {
            mbWon.push(theSound)
        } else if (thisLetter == "L") {
            mbLost.push(theSound)
        } else if (thisLetter == "C") {
            sbCorrect.push(theSound)
        } else if (thisLetter == "I") {
            sbIncorrect.push(theSound)
        } else if (thisLetter == "D") {
            sbDoom.push(theSound)
        } else if (thisLetter == "S") {
            sbSFX.push(theSound)
        }
    }
}
let thisRead = 0
let sbSFX: string[] = []
let sbDoom: string[] = []
let mbLost: string[] = []
let mbWon: string[] = []
let mbAwaiting: string[] = []
let sbVoices: string[] = []
let mbIntro: string[] = []
let mbTutorial: string[] = []
let musicString = ""
let thisLetter = ""
let stringParts: string[] = []
let sbIntro: string[] = []
let soundString = ""
let thisItem = ""
let listOut: string[] = []
let listCopy: string[] = []
let thePotSays = 0
let lineCount = 0
let sbIncorrect: string[] = []
let playlistIncorrect: string[] = []
let sbCorrect: string[] = []
let playlistCorrect: string[] = []
let sbHurry: string[] = []
let playlistHurry: string[] = []
let sbLost: string[] = []
let playlistLost: string[] = []
let sbWon: string[] = []
let playlistWon: string[] = []
let sbFailure: string[] = []
let playlistFailure: string[] = []
let sbSuccess: string[] = []
let playlistSuccess: string[] = []
let sbOuch: string[] = []
let playlistOuch: string[] = []
let sbNay: string[] = []
let playlistNay: string[] = []
let sbYay: string[] = []
let playlistYay: string[] = []
let sbReady: string[] = []
let playlistReady: string[] = []
let sbName: string[] = []
let playlistName: string[] = []
let theSound = ""
let mbLevel: string[] = []
let playlistLevel: string[] = []
let songNumber = 0
let relativeVolumeB = 0
let relativeVolumeA = 0
Connected.MP3SetPort(Connected.DigitalRJPin.J3)
Connected.execute(Connected.playType.Stop)
Connected.MP3SetPort(Connected.DigitalRJPin.J4)
Connected.execute(Connected.playType.Stop)
relativeVolumeA = 0
relativeVolumeB = 0
songNumber = -1
let volumeA = -1
let volumeB = -1
playlistLevel = []
setSounds("Mario")
setMusic("Mario")
let lastRead = potRead()
playMusic("Level")
loops.everyInterval(100, function () {
    thisRead = potRead()
    if (!(isNearly(thisRead, lastRead, 0.01))) {
        lastRead = thisRead
        notLegos.volumeQuickPort(convertToText(30 * (thisRead * relativeVolumeA)), notLegos.DigitalRJPin.J3)
        notLegos.volumeQuickPort(convertToText(30 * (thisRead * relativeVolumeB)), notLegos.DigitalRJPin.J4)
    }
})
