input.onButtonPressed(Button.A, function () {
    IndexNumber += 1
    music.startMelody(music.builtInMelody(Melodies.Prelude), MelodyOptions.Once)
})
input.onButtonPressed(Button.B, function () {
    IndexNumber += -1
    music.startMelody(music.builtInMelody(Melodies.Ode), MelodyOptions.Once)
})
let IndexNumber = 0
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
for (let index = 0; index < 4; index++) {
    basic.clearScreen()
    basic.showIcon(IconNames.Square)
    basic.clearScreen()
    basic.showIcon(IconNames.SmallSquare)
}
basic.showLeds(`
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    . . # . .
    `)
basic.forever(function () {
    if (IndexNumber > 12) {
        IndexNumber = 1
    } else if (IndexNumber < 1) {
        IndexNumber = 12
    } else if (IndexNumber == 1) {
        basic.showIcon(IconNames.Heart)
    } else if (IndexNumber == 2) {
        basic.showIcon(IconNames.Sad)
    } else if (IndexNumber == 3) {
        basic.showIcon(IconNames.Confused)
    } else if (IndexNumber == 4) {
        basic.showIcon(IconNames.Angry)
    } else if (IndexNumber == 5) {
        basic.showIcon(IconNames.Asleep)
    } else if (IndexNumber == 6) {
        basic.showIcon(IconNames.Surprised)
    } else if (IndexNumber == 7) {
        basic.showIcon(IconNames.Silly)
    } else if (IndexNumber == 8) {
        basic.showIcon(IconNames.Fabulous)
    } else if (IndexNumber == 9) {
        basic.showIcon(IconNames.Meh)
    } else if (IndexNumber == 10) {
        basic.showIcon(IconNames.TShirt)
    } else if (IndexNumber == 11) {
        basic.showIcon(IconNames.Rollerskate)
    } else if (IndexNumber == 12) {
        basic.showIcon(IconNames.Duck)
    } else {
        // This is an error condition, whcih we should not ever reach, if the code is correct :) 
        for (let index = 0; index < 8; index++) {
            basic.clearScreen()
            basic.showIcon(IconNames.Square)
            basic.clearScreen()
            basic.showIcon(IconNames.SmallSquare)
            basic.clearScreen()
            basic.showIcon(IconNames.SmallDiamond)
        }
    }
})
