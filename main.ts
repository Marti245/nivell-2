if (input.lightLevel() < 50) {
    basic.showLeds(`
        . # # # .
        # # . . #
        # # . . .
        # # . . #
        . # # # .
        `)
} else {
    basic.clearScreen()
}
basic.forever(function () {
	
})
