// on A button press
input.onButtonPressed(Button.A, function () {
    if (wall_x != point_x) {
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
                point_y += 1
            } else {
                point_y = 0
            }
            led.plot(point_x, point_y)
        }
    }
})
// on B button press
input.onButtonPressed(Button.B, function () {
	
})
let can_start = 0
let wall_x = 0
let point_y = 0
let point_x = 0
point_x = 1
point_y = 2
wall_x = 4
let wall_brightness = 100
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
basic.forever(function () {
    basic.pause(500)
    if (can_start == 2) {
        if (wall_status == 1) {
            led.plotBrightness(wall_x, 0, wall_brightness)
            led.plotBrightness(wall_x, 1, wall_brightness)
            led.plotBrightness(wall_x, 2, wall_brightness)
            led.plotBrightness(wall_x, 3, wall_brightness)
            led.plotBrightness(wall_x, 4, wall_brightness)
            wall_status = 2
        } else if (wall_status == 2) {
            if (wall_x != 0) {
                led.unplot(wall_x, 0)
                led.unplot(wall_x, 1)
                led.unplot(wall_x, 2)
                led.unplot(wall_x, 3)
                led.unplot(wall_x, 4)
                wall_x += -1
                led.plotBrightness(wall_x, 0, wall_brightness)
                led.plotBrightness(wall_x, 1, wall_brightness)
                led.plotBrightness(wall_x, 2, wall_brightness)
                led.plotBrightness(wall_x, 3, wall_brightness)
                led.plotBrightness(wall_x, 4, wall_brightness)
            } else {
                led.unplot(wall_x, 0)
                led.unplot(wall_x, 1)
                led.unplot(wall_x, 2)
                led.unplot(wall_x, 3)
                led.unplot(wall_x, 4)
                wall_x = 4
                basic.pause(200)
                led.plotBrightness(wall_x, 0, wall_brightness)
                led.plotBrightness(wall_x, 1, wall_brightness)
                led.plotBrightness(wall_x, 2, wall_brightness)
                led.plotBrightness(wall_x, 3, wall_brightness)
                led.plotBrightness(wall_x, 4, wall_brightness)
            }
            if (wall_x == 0) {
                led.plot(point_x, point_y)
            }
        } else {
        	
        }
    }
})
