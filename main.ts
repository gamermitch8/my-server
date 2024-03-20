input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . # . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            # # # # #
            . . . . .
            `)
    }
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(100)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            # . . . .
            # . # . #
            . . . . .
            . . # # .
            . # . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . # # .
            # . . . #
            `)
        basic.pause(100)
    }
    basic.showString("aa i got hit by a rock")
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        . # # # .
        # . . . #
        `)
})
basic.showIcon(IconNames.Sad)
