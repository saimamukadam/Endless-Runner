// Player prefab
class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.width / 2, this.height / 2)
        this.body.setCollideWorldBounds(true)
        //this.setGravityY(900) 

        // set custom Character properties
        this.playerVelocity = 350 // in pixels
        this.isJumping = false
        this.jumpingVelocity = 200

        // add sounds
        //this.play("run")
    }
    
    update(){
        // jumping mechanics
    }

    // reset character
    reset() {
        this.y = game.config.height;
    }
}
