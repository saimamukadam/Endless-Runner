// Monster prefab 
class Monster extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this) // add to existing scene
        scene.physics.add.existing(this)

        //this.body.setSize(this.width / 2, this.height / 2)
        this.moveSpeed = game.settings.monsterSpeed; // pixels per frame
    }

    update() {
        // move monster left
        this.body.position.x -= this.moveSpeed;
        // wrap around from left edge to right edge
        if(this.body.position.x <= 0 - this.body.width) {
            this.reset();
        }
    }

    // position reset
    reset() {
        this.body.position.x = game.config.width;
    }
}