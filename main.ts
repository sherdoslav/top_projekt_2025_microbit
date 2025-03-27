function menu_action_B () {
    if (can_start == 1) {
        if (difficulty_bar != 0) {
            difficulty_bar += -1
            led.plot(4, difficulty_bar)
        } else {
            led.unplot(4, 0)
            led.unplot(4, 1)
            led.unplot(4, 2)
            led.unplot(4, 3)
            difficulty_bar = 4
        }
    }
}
// on A button press
input.onButtonPressed(Button.A, function () {
    if (wall_x != point_x) {
        if (can_start == 1) {
            menu_action_A()
        } else if (can_start == 2) {
            move_player_down()
        }
    }
})
function set_default_variables () {
    point_x = 1
    point_y = 2
    wall_x = 4
    wall_brightness = 100
    wall_status = 1
    wall_hole = randint(0, 4)
}
function menu_action_A () {
    set_difficulty()
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plot(point_x, point_y)
    can_start = 2
}
function light_the_wall () {
    if (wall_hole != 0) {
        led.plotBrightness(wall_x, 0, wall_brightness)
    }
    if (wall_hole != 1) {
        led.plotBrightness(wall_x, 1, wall_brightness)
    }
    if (wall_hole != 2) {
        led.plotBrightness(wall_x, 2, wall_brightness)
    }
    if (wall_hole != 3) {
        led.plotBrightness(wall_x, 3, wall_brightness)
    }
    if (wall_hole != 4) {
        led.plotBrightness(wall_x, 4, wall_brightness)
    }
}
function move_player_down () {
    led.unplot(point_x, point_y)
    if (point_y != 4) {
        point_y += 1
    } else {
        point_y = 0
    }
    led.plot(point_x, point_y)
}
function move_player_up () {
    led.unplot(point_x, point_y)
    if (point_y != 0) {
        point_y += -1
    } else {
        point_y = 4
    }
    led.plot(point_x, point_y)
}
// on A button press
input.onButtonPressed(Button.B, function () {
    if (wall_x != point_x) {
        if (can_start == 1) {
            menu_action_B()
        } else if (can_start == 2) {
            move_player_up()
        }
    }
})
function extinguish_the_wall () {
    led.unplot(wall_x, 0)
    led.unplot(wall_x, 1)
    led.unplot(wall_x, 2)
    led.unplot(wall_x, 3)
    led.unplot(wall_x, 4)
}
function set_difficulty () {
    if (difficulty_bar == 4) {
        wall_speed = 500
    } else if (difficulty_bar == 3) {
        wall_speed = 275
    } else if (difficulty_bar == 2) {
        wall_speed = 350
    } else if (difficulty_bar == 1) {
        wall_speed = 200
    } else if (difficulty_bar == 0) {
        wall_speed = 100
    } else {
        wall_speed = 600
    }
}
let wall_speed = 0
let wall_hole = 0
let wall_status = 0
let wall_brightness = 0
let point_y = 0
let point_x = 0
let wall_x = 0
let can_start = 0
let difficulty_bar = 0
set_default_variables()
difficulty_bar = 4
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    `)
basic.pause(300)
basic.showLeds(`
    . . . . .
    . . . . #
    . . . # #
    . . # # #
    . # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . # #
    . # # # #
    # # # # #
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    # . . . .
    # # # # .
    # # # # #
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # # . . .
    # # # . .
    # # . . .
    `)
basic.showLeds(`
    # # # # .
    # # # . .
    # # . . .
    # . . . .
    # . . . .
    `)
basic.showLeds(`
    # . . . .
    # # . . .
    # # # . #
    # # . . .
    # . . . .
    `)
can_start = 1
basic.showLeds(`
    # . . . .
    # # . . .
    # # # . .
    # # . . .
    # . . . #
    `)
basic.forever(function () {
    while (can_start == 2) {
        basic.pause(wall_speed)
        if (wall_status == 1) {
            light_the_wall()
            wall_status = 2
        } else if (wall_status == 2) {
            if (wall_x != 0) {
                extinguish_the_wall()
                wall_x += -1
                light_the_wall()
            } else {
                extinguish_the_wall()
                wall_x = 4
                wall_hole = randint(0, 4)
                basic.pause(200)
                light_the_wall()
            }
            if (wall_x == 0) {
                led.plot(point_x, point_y)
            }
        } else {
        	
        }
        if (wall_x == 1 && wall_hole != point_y) {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            set_default_variables()
            can_start = 1
        }
    }
})
