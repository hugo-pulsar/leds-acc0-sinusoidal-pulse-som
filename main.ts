// conversion factor degrees2rad =  0.1745329251994335
// 
// valores MAX da força
// 
// 1g 1050
// 
// 2g dá 3533
// 
// 4g dá 7066
// 
// 8g da 11548
input.onButtonPressed(Button.A, function () {
    state = 0
    basic.showString("0")
})
// conversion factor degrees2rad =  0.1745329251994335
// 
// valores MAX da força
// 
// 1g 1050
// 
// 2g dá 3533
// 
// 4g dá 7066
// 
// 8g da 11548
input.onButtonPressed(Button.B, function () {
    state = 1
    basic.showString("1")
})
let acc0 = 0
let state = 0
basic.showIcon(IconNames.Triangle)
let strip = neopixel.create(DigitalPin.P0, 32, NeoPixelMode.RGB)
let max_acc_tot = 2500
let Lum = 30
let pulse_speed = 0.5
strip.showRainbow(330, 360)
input.setAccelerometerRange(AcceleratorRange.TwoG)
basic.pause(500)
strip.clear()
strip.showColor(neopixel.hsl(200, 255, Lum))
music.setVolume(255)
basic.clearScreen()
/**
 * acc0 é a acc total menos a força de gravidade. Portanto acc0 é nula quando o microbit está parado. acc0 < 20 significa parado (controla)
 */
/**
 * VER SE DA PARA FAZER WHILE PULSO SINUSOIDAL A VARIAR COM ACC!!!
 */
basic.forever(function () {
    acc0 = Math.constrain(input.acceleration(Dimension.Strength) - 1000, 0, 2500)
    if (acc0 > 100) {
        pulse_speed = Math.map(acc0, 0, max_acc_tot, 0.3, 3000)
        strip.showColor(neopixel.hsl(randint(0, 255), 255, Lum + 20 * Math.sin(control.millis() * pulse_speed * Math.PI / 180)))
        music.ringTone(pulse_speed)
    } else {
        pulse_speed += -1
        pulse_speed = Math.constrain(pulse_speed, 0.1, 3000)
        strip.showColor(neopixel.hsl(240, 255, Lum + 20 * Math.sin(control.millis() * pulse_speed * Math.PI / 180)))
        music.ringTone(pulse_speed)
    }
})
