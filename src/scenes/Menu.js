class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        // load audio
        this.load.audio('bgmusic', './assets/PixelPeekerPolka.wav');
    }

    create() {
        let menuConfig = {
            fontFamily: 'Comic Sans',
            fontSize: 44, // 24
            backgroundColor: '#000000', // FFFFFF
            color: '#6495ED', // 000000
            align: 'center',
            padding: {
                top: 0,
                bottom: 0,
            },
            fixedWidth: 0
        }
        
        // menu text
        this.add.text(game.config.width/2, game.config.height/2.75 - borderUISize - borderPadding, 'RUN CARL RUN !!!', menuConfig).setOrigin(0.5);
        
        menuConfig.color = '#6F8FAF';
        menuConfig.fontSize = 20;
        this.add.text(game.config.width/2, game.config.height/2.4, 'INSTRUCTIONS:', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/2.1, 'collect stars and avoid monsters, click to jump', menuConfig).setOrigin(0.5);
        
        menuConfig.color = '#ADD8E6';
        this.add.text(game.config.width/2, game.config.height/1.7, 'press (SPACE) to start', menuConfig).setOrigin(0.5);

        menuConfig.color = '#89CFF0';
        menuConfig.fontSize = 16
        this.add.text(game.config.width/2, game.config.height/1.4, 'CREDITS:', menuConfig).setOrigin(0.5);
        menuConfig.fontSize = 14

        this.add.text(game.config.width/2, game.config.height/1.3, 'Designer: Saima Mukadam', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.22, 'Assets: Saima Mukadam', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2, game.config.height/1.15, 'Music: Pixel Peeker Polka by Kevin Macleod', menuConfig).setOrigin(0.5);


        // define keys
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    }
    
    update() {
        if (Phaser.Input.Keyboard.JustDown(keySPACE)) { // start game
            
            game.settings = {
                monsterSpeed: 4,
                starSpeed: 3
            }
            
            this.sound.play('bgmusic');
            this.scene.start('playScene');
        }
    }

}