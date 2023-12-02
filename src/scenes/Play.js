class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load audio
        // this.load.audio('sfx_bgmusic', './assets/highoctane.wav');

        // load sprites
        this.load.image('background', './assets/background.png');
        //this.load.image('star', './assets/star.png');
        this.load.image('platform', './assets/platform.png');

        // load mc spritesheet
        // spritesheet size: 32x180, 3 sprites
        this.load.spritesheet('mcspritesheet', './assets/mcspritesheet.png', {
            frameWidth: 32, 
            frameHeight: 60
        });
    }

    create() {
        // scrolling background
        this.background = this.add.tileSprite(0, 0, 700, 375, 'background').setOrigin(0,0);

        // add character
        //this.maincharacter = new mainCharacter(this, gameconfig.width/2, game.config.height - borderUISize - borderPadding, 'tile00').setOrigin(0.5,0);

        // add star
        //this.star = new star(this, gameconfig.width/2, game.config.height - borderUISize - borderPadding, 'star').setOrigin(0.5,0);

        // define keys
        //keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        // initialize score

        // display scores

        /*
        // group with all active platforms.
        this.platformGroup = this.add.group({

            // once a platform is removed, it's added to the pool
            removeCallback: function(platform){
                platform.scene.platformPool.add(platform)
            }
        });
        */

        /*
        // pool
        this.platformPool = this.add.group({

            // once a platform is removed from the pool, it's added to the active platforms group
            removeCallback: function(platform){
                platform.scene.platformGroup.add(platform)
            }
        });
        */

        // number of consecutive jumps made by the player
        this.playerJumps = 0;

        /*
        // adding a platform to the game, the arguments are platform width, x position and y position
        this.addPlatform(game.config.width, game.config.width / 2, game.config.height * gameOptions.platformVerticalLimit[1]);
        */

        // worldbounds and physics
        this.player = this.physics.add.sprite(width / 4, height / 4, 'mcspritesheet', 1) 
        this.player.body.setCollideWorldBounds(true)
        this.player.body.setSize(32,60).setOffset(2,55)
        this.PLAYER_VELOCITY = 350


        // adding the player;
        //this.player = this.physics.add.sprite(gameOptions.playerStartPosition, game.config.height * 0.7, "mcspritesheet");
        this.player.setGravityY(gameOptions.playerGravity); // player falling from sky in beginning, this is funny

        // set cursor keys
        cursors = this.input.keyboard.createCursorKeys()

        // setting player animation
        this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("mcspritesheet", {
                start: 0,
                end: 2
            }),
            frameRate: 6,
            repeat: -1
        });

        this.anims.create({
            key: "jump",
            frames: this.anims.generateFrameNumbers("mcspritesheet", {
                start: 1,
                end: 1
            }),
            frameRate: 6,
            repeat: -1
        });

        this.player.play('run')
        //this.player.play('jump')
        
        /*
        // setting collisions between the player and the platform group
        this.physics.add.collider(this.player, this.platformGroup, function(){

            // play "run" animation if the player is on a platform
            if(!this.player.anims.isPlaying){
                this.player.anims.play("run");
            }
        }, null, this);

        // checking for input
        this.input.on("pointerdown", this.jump, this);
        */
    }

    /*
    addPlatform(platformWidth, posX, posY){
        let platform;
        if(this.platformPool.getLength()){
            platform = this.platformPool.getFirst();
            platform.x = posX;
            platform.active = true;
            platform.visible = true;
            this.platformPool.remove(platform);
        }
        else{
            platform = this.physics.add.sprite(posX, posY, "platform");
            platform.setImmovable(true);
            platform.setVelocityX(Phaser.Math.Between(gameOptions.platformSpeedRange[0], gameOptions.platformSpeedRange[1]) * -1);
            this.platformGroup.add(platform);
        }
        platform.displayWidth = platformWidth;
        this.nextPlatformDistance = Phaser.Math.Between(gameOptions.spawnRange[0], gameOptions.spawnRange[1]);
    }
    */

    /*
    // the player jumps when on the ground, or once in the air as long as there are jumps left and the first jump was on the ground
    jump(){
        if(this.player.body.touching.SPACE || (this.playerJumps > 0 && this.playerJumps < gameOptions.jumps)){
            if(this.player.body.touching.SPACE){
                this.playerJumps = 0;
            }
            this.player.setVelocityY(gameOptions.jumpForce * -1);
            this.playerJumps ++;

            // stops animation
            this.player.anims.stop();
        }
    }
    */

    update() {
        this.background.tilePositionX += 2;

        //if(cursors.SPACE.isDown){
          //  playerVector.y = 1
            //playerDirection = 'jump'
        //}
        

        // game over, restart
        if(this.player.y > game.config.height){
            this.scene.start("playScene");
        }
        this.player.x = gameOptions.playerStartPosition;


        /*
        // recycling platforms
        let minDistance = game.config.width;
        let rightmostPlatformHeight = 0;
        this.platformGroup.getChildren().forEach(function(platform){
            let platformDistance = game.config.width - platform.x - platform.displayWidth / 2;
            if(platformDistance < minDistance){
                minDistance = platformDistance;
                rightmostPlatformHeight = platform.y;
            }
            if(platform.x < - platform.displayWidth / 2){
                this.platformGroup.killAndHide(platform);
                this.platformGroup.remove(platform);
            }
        }, this);
        
        // adding new platforms
        if(minDistance > this.nextPlatformDistance){
            let nextPlatformWidth = Phaser.Math.Between(gameOptions.platformSizeRange[0], gameOptions.platformSizeRange[1]);
            let platformRandomHeight = gameOptions.platformHeighScale * Phaser.Math.Between(gameOptions.platformHeightRange[0], gameOptions.platformHeightRange[1]);
            console.log(rightmostPlatformHeight)
            let nextPlatformGap = rightmostPlatformHeight + platformRandomHeight;
            let minPlatformHeight = game.config.height * gameOptions.platformVerticalLimit[0];
            let maxPlatformHeight = game.config.height * gameOptions.platformVerticalLimit[1];
            let nextPlatformHeight = Phaser.Math.Clamp(nextPlatformGap, minPlatformHeight, maxPlatformHeight);
            this.addPlatform(nextPlatformWidth, game.config.width + nextPlatformWidth / 2, nextPlatformHeight);
        }
        */
    }
}