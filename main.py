# on A button press

def on_button_pressed_a():
    global can_start, point_y
    if can_start == 1:
        basic.show_leds("""
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            """)
        led.plot(point_x, point_y)
        can_start = 2
    elif can_start == 2:
        led.unplot(point_x, point_y)
        if point_y != 4:
            point_y += 1
        else:
            point_y = 0
        led.plot(point_x, point_y)
input.on_button_pressed(Button.A, on_button_pressed_a)

# on B button press

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

can_start = 0
point_y = 0
point_x = 0
point_x = 1
point_y = 2
wall_x = 4
basic.show_leds("""
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    """)
basic.pause(100)
basic.show_leds("""
    . . # . .
    . # . # .
    . # # # .
    . # . # .
    . . . . .
    """)
can_start = 1
wall_status = 1

def on_forever():
    global wall_status
    if can_start == 2:
        if wall_status == 1:
            led.plot(wall_x, 0)
            led.plot(wall_x, 1)
            led.plot(wall_x, 2)
            led.plot(wall_x, 3)
            led.plot(wall_x, 4)
            wall_status = 2
        elif wall_status == 2:
            led.unplot(wall_x, 0)
            led.unplot(wall_x, 1)
            led.unplot(wall_x, 2)
            led.unplot(wall_x, 3)
            led.unplot(wall_x, 4)
        else:
            pass
basic.forever(on_forever)
