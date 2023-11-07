class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('sfx_bgmusic', './assets/highoctane.wav');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Comic Sans',
            fontSize: '24 px',
            backgroundColor: '#FACADE',
            color: '#FFFFFF',
            align: 'center',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        // menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'STAR RUN', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2, 'Use (SPACE) to jump & (F) to shoot', menuConfig).setOrigin(0.5);
        menuConfig.backgroundColor = '#000000';
        menuConfig.color = '#89CFF0';
        this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press (SPACE) to start)', menuConfig).setOrigin(0.5);

        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
            // start game
            /*
            game.settings = {
            } */
            this.sound.play('sfx_bgmusic');
            this.scene.start('playScene');    
        }
    }

}