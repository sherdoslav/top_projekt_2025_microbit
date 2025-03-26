// on A button press
input.onButtonPressed(Button.A, function () {
    if (can_start == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        led.plot(point_x, point_y)
        can_start = 2
    } else if (can_start == 2) {
        led.unplot(point_x, point_y)
        if (point_y != 4) {
        	
        } else {
            point_y = 0
        }
        led.plot(point_x, point_y)
    }
})
// on B button press
input.onButtonPressed(Button.B, function () {
	
})
let can_start = 0
let point_y = 0
let point_x = 0
point_x = 1
point_y = 2
let wall_x = 4
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
let wall_status = 1
loops.everyInterval(500, function () {
    if (can_start == 2) {
        if (wall_status == 1) {
            led.plot(wall_x, 0)
            led.plot(wall_x, 1)
            led.plot(wall_x, 2)
            led.plot(wall_x, 3)
            led.plot(wall_x, 4)
            wall_status = 2
        } else if (wall_status == 2) {
            led.unplot(wall_x, 0)
            led.unplot(wall_x, 1)
            led.unplot(wall_x, 2)
            led.unplot(wall_x, 3)
            led.unplot(wall_x, 4)
            wall_x += -1
            led.unplot(wall_x, 0)
            led.unplot(wall_x, 1)
            led.unplot(wall_x, 2)
            led.unplot(wall_x, 3)
            led.unplot(wall_x, 4)
        } else {
        	
        }
    }
})
basic.forever(function () {
	
})
