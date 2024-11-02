
// the game & enemy spawning
let projectile = null
function doSomething () {
    player2 = sprites.create(assets.image`player`, SpriteKind.Player)
    scene.setBackgroundImage(assets.image`bg`)
    player2.setPosition(16, 79)
    controller.moveSprite(player2, 50, 0)
    player2.setStayInScreen(true)
    sprites.destroy(textSprite)


}
let player2: Sprite = null
let projectile2: Sprite = null
let Lastpressed = 0
let Cooldown = 0

// start
scene.setBackgroundImage(assets.image`maintitle`)
let textSprite = textsprite.create("TAHNK")
Cooldown = 3000
textSprite.setPosition(74, 22)
game.showLongText("Start", DialogLayout.Bottom)
doSomething()

// when 'A' button is pressed aka gun
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (game.runtime() - Lastpressed >= Cooldown) {
        projectile2 = sprites.createProjectileFromSprite(assets.image`playershell`, player2, 200, 0)
        Lastpressed = game.runtime()
    }
})

// animations
characterAnimations.loopFrames(
    player2,
    assets.animation`tank-moveR`,
    200,
    characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
    player2,
    assets.animation`tank-moveL`,
    200,
    characterAnimations.rule(Predicate.MovingLeft)
)

// enemy setup


// winning bomb
info.onScore(1000, function() {
    music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 9999, SoundExpressionEffect.None, InterpolationCurve.Logarithmic)
    pause(10000)
    sprites.destroy(player2)
    scene.setBackgroundImage(assets.image`black`)
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    pause(3000)
    scene.setBackgroundImage(assets.image`victory`)
})

//testing
for (let i = 0; i < 5; i++) {
    
}