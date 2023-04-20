input.onButtonPressed(Button.A, function () {
    if (clickCt > CLICK_MIN) {
        clickCt += -1
        music.setVolume(MAX_VOLUME / CLICK_MAX * clickCt)
        for (let index = 0; index <= X_MAX; index++) {
            led.unplot(index, yCt)
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
        yCt += 1
    } else {
        clickCt = CLICK_MIN
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.B, function () {
    if (clickCt <= CLICK_MAX) {
        clickCt += 1
        music.setVolume(MAX_VOLUME / CLICK_MAX * clickCt)
        for (let index = 0; index <= X_MAX; index++) {
            led.plot(index, yCt)
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
        yCt += -1
    } else {
        clickCt = CLICK_MAX
    }
})
let X_MAX = 0
let yCt = 0
let MAX_VOLUME = 0
let CLICK_MIN = 0
let CLICK_MAX = 0
let clickCt = 0
clickCt = 5
CLICK_MAX = 5
CLICK_MIN = 0
MAX_VOLUME = 255
music.setVolume(MAX_VOLUME)
yCt = 0
X_MAX = 4
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
music.playTone(262, music.beat(BeatFraction.Whole))
