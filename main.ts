function chec_blw () {
	
}
input.onButtonPressed(Button.A, function () {
    led.unplot(2, y_variable)
    y_variable += 1
    sprite.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    sprite.change(LedSpriteProperty.Y, 1)
    if (sprite.get(LedSpriteProperty.Y) == 4) {
        sprite = game.createSprite(0, 0)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
let y_variable = 0
let sprite: game.LedSprite = null
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Whole))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(247, music.beat(BeatFraction.Half))
music.playTone(220, music.beat(BeatFraction.Whole))
music.playTone(220, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(294, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Half))
music.playTone(262, music.beat(BeatFraction.Half))
music.playTone(294, music.beat(BeatFraction.Whole))
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(262, music.beat(BeatFraction.Whole))
music.playTone(220, music.beat(BeatFraction.Whole))
music.playTone(220, music.beat(BeatFraction.Whole))
music.playMelody("C5 D B E A - - - ", 500)
music.playTone(330, music.beat(BeatFraction.Whole))
music.playTone(247, music.beat(BeatFraction.Whole))
music.playTone(392, music.beat(BeatFraction.Whole))
music.playTone(494, music.beat(BeatFraction.Whole))
basic.pause(200)
basic.showString("TETRIS")
sprite = game.createSprite(0, 0)
y_variable += 1
led.plot(2, 0)
led.plot(2, 4)
basic.forever(function () {
    if (y_variable == 0) {
        music.playMelody("C5 D B E A - - - ", 500)
    } else {
        led.plot(1, y_variable)
        chec_blw()
    }
    if (led.point(0, y_variable + 2)) {
    	
    } else {
        led.plot(1, y_variable)
        chec_blw()
    }
    if (led.point(0, y_variable + 3)) {
    	
    } else {
        led.plot(1, y_variable)
        chec_blw()
    }
    if (led.point(0, y_variable + 4)) {
    	
    } else {
        led.plot(1, y_variable)
        chec_blw()
    }
})
