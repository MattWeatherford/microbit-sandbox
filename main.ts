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
basic.forever(function () {
    if (IndexNumber > 12) {
        IndexNumber = 1
    } else if (IndexNumber < 1) {
        IndexNumber = 12
    } else {
    	
    }
})
