class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {

        // load sprites
        this.load.image('background', './assets/background.png');
        this.load.image('star', './assets/star.png');
        this.load.image('monster', './assets/monster.png');

        // load mc
        // spritesheet size: 32x180, 3 frames
        this.load.spritesheet('mcspritesheet', './assets/mcspritesheet.png', {
            frameWidth: 32, 
            frameHeight: 60
        });
    }

    create() {
        // place background sprite
        this.background = this.add.tileSprite(0, 0, 700, 375, 'background').setOrigin(0,0);
        
        // add player
        this.player = new Player(this, width/5, height/1.41, 'player').setOrigin(0,0);
        //this.player = new Player(this, width + borderUISize*6, borderUISize*10.3 + borderPadding*2, 'player').setOrigin(0,0);
        // ^ that was making the player spawn rightmost on the screen for some reason
        
        // add monster
        this.monster = new Monster(this, width + borderUISize*6, borderUISize*10.3 + borderPadding*2, 'monster', 0,10).setOrigin(0,0);

        // add star
        this.star = new Star(this, width + borderUISize*7, borderUISize*6 + borderPadding*2, 'star', 0,20).setOrigin(0,0);

        // worldbounds and physics
        //this.player = this.physics.add.sprite(width/4, height/1.25, 'mcspritesheet', 1) 
        //this.player.body.setCollideWorldBounds(true)
        //this.player.body.setSize(32,60)
        //this.PLAYER_VELOCITY = 350
        //this.player.setGravityY(gameOptions.playerGravity); // player falling from sky in beginning, this is funny, looks like hes spawning

        //this.monster = this.physics.add.sprite(width / 4, height / 4, 'monster', 1)
        //this.monster.body.setSize(40,40)
        //this.star = this.physics.add.sprite(width / 4, height / 4, 'star', 1)
        //this.star.body.setSize(40,40)

        // set cursor keys
        //cursors = this.input.keyboard.createCursorKeys()
        //spaceKey = this.input.keyboard.addKey('SPACE')

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
            repeat: 1
        });

        this.player.play('run')
        //this.player.play('jump')

        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        // initialize score
        this.playerScore =  0;

        // display score
        let scoreConfig = {
            fontFamily: 'Courier',
            fontSize: '28px',
            backgroundColor: '#F3B141',
            color: '#843605',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 100
        }

        this.scoreLeft = this.add.text(borderUISize + borderPadding, borderUISize + borderPadding*2, this.playerScore, scoreConfig);

        // GAME OVER flag
        this.gameOver = false;      
        
        // collisions
        this.physics.add.collider(this.player, this.star, (player, star) => {
            this.star.disableBody()
            if(!this.gameOver){
                this.playerScore++
                this.star.reset()
            }
            this.star.enableBody()
        })

        this.physics.add.collider(this.player, this.monster, (player, monster) => {
            this.gameOver = true;
            this.player.body.setCollideWorldBounds(false)
            this.player.body.setGravityX(0)
        })
    }

    update() {

        if(!this.gameOver){
            this.player.update()
            this.star.update()
            this.monster.update()

            // scrolling background
            this.background.tilePositionX += 2;
        }

        else{
            this.player.stop()
            this.scene.restart()
        }


        // game over, restart
        if (this.gameOver) {
            this.scene.restart();
        }
    }
}