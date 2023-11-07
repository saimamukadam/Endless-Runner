class Play extends Phaser.Scene {
    constructor() {
        super("playScene");
    }

    preload() {
        // load audio
        // this.load.audio('sfx_bgmusic', './assets/highoctane.wav');

        // load sprites
        this.load.image('background', './assets/background.png');
        this.load.image('beam', './assets/beam.png');
        this.load.image('monster', './assets/monster.png');
        this.load.image('star', './assets/star.png');
        // this.load.image('tile00', './assets/tile00.png');
        // this.load.image('tile01', './assets/tile01.png');
        // this.load.image('tile02', './assets/tile02.png');

        // load spritesheet
        this.load.spritesheet('spritesheet', './assets/spritesheet.png', {frameWidth: 100, frameHeight: 100, startFrame: 0, endFrame: 15});
    }

    create() {
        // scrolling background
        this.background = this.add.tileSprite(0, 0, 480, 320, 'background').setOrigin(0,0);

        // add character
        //this.maincharacter = new mainCharacter(this, gameconfig.width/2, game.config.height - borderUISize - borderPadding, 'tile00').setOrigin(0.5,0);

        // add beam
        this.beam = new Beam(this, gameconfig.width/2, game.config.height - borderUISize - borderPadding, 'beam').setOrigin(0.5,0);

        // add monster
        this.monster = new Monster(this, gameconfig.width/2, game.config.height - borderUISize - borderPadding, 'monster').setOrigin(0.5,0);

        // add star
        this.star = new star(this, gameconfig.width/2, game.config.height - borderUISize - borderPadding, 'star').setOrigin(0.5,0);

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