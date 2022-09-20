def on_button_pressed_a():
    for índice in range(361):
        strip.show_color(neopixel.hsl(200, 255, Lum + 50 * Math.sin(índice * Math.PI / 180)))
        basic.pause(0.01)
input.on_button_pressed(Button.A, on_button_pressed_a)

"""

conversion factor degrees2rad =  0.1745329251994335

valores MAX da força

1g 1050

2g dá 3533

4g dá 7066

8g da 11548

"""

def on_button_pressed_b():
    basic.show_number(Math.sin(angle * Math.PI / 180))
input.on_button_pressed(Button.B, on_button_pressed_b)

angle = 0
Lum = 0
strip: neopixel.Strip = None
strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
max_acc_tot = 3500
Lum = 50
angle = 90
strip.show_rainbow(330, 360)
input.set_accelerometer_range(AcceleratorRange.TWO_G)
basic.pause(100)
strip.clear()
strip.show_color(neopixel.hsl(200, 255, Lum))

def on_forever():
    pass
basic.forever(on_forever)
