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
        // spritesheet size: 32x180
        this.load.spritesheet('spritesheet', './assets/mcspritesheet.png', {
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
        keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
        
        // initialize score

        // display scores
    }

    update() {
        this.background.tilePositionX += 2;
    }
}