// on A button press
input.onButtonPressed(Button.A, function () {
    if (can_start == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . # . .
            `);
        can_start = 2
    }
    if (can_start == 2) {

    }
})
// on B button press
input.onButtonPressed(Button.B, function () {
    if (true) {
    	
    }
})
let can_start = 0;
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
basic.pause(100)
basic.showLeds(`
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    . . . . .
    `)
can_start = 1
basic.forever(function () {
	
})