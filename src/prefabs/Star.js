// Star prefab 
class Star extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        scene.physics.add.existing(this)

        this.points = 0;
        this.moveSpeed = game.settings.starSpeed;
    }

    update() {
        // move star left
        this.body.position.x -= this.moveSpeed;
        // wrap around from left to right edge
        if(this.body.position.x <= 0 - this.body.width) {
            this.reset();
        }
    }

    reset() {
        this.body.position.x = game.config.width;
        this.body.position.y = Phaser.Math.Between(height / 2, height / 3)
        this.points++
    }
} 