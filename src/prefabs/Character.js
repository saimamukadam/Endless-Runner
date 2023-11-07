class Character extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, direction) {
        super(scene, x, y, texture, frame);

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.width / 2, this.height / 2)
        this.body.setCollideWorldBounds(true)

        // set custom Character properties
        this.characterVelocity = 100 // in pixels
    }

    // reset character
    reset() {
        this.y = game.config.height - borderUISize - borderPadding;
    }
}