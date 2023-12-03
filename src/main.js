/*
NAME: Saima Mukadam
GAME TITLE: RUN CARL RUN!!!
HRS SPENT: 20
CREATIVE TILT: I created a pixel-art based game to mimic a platformer game's art style. The basis of my
game is that you are playing as a character and are running along a grassy path collecting stars for points
while dodging rain clouds. The player is competitive against themself as they try to collect more stars and 
beat their high score. I'm proud of the art I created because I had no idea where to start at first but I think 
it looks nice for my first time. I had to learn how to use asesprite and it took me a while to get the hang of 
it, but I was able to learn it quickly and created all of my visual assets through it. I also like my background 
music and chose it because I felt that it would hype the player up as they were playing and was also a fun
choice of background music.
*/

// SOUND CREDITS:
// Pixel Peeker Polka – faster by Kevin MacLeod | https://incompetech.com/
// Music promoted by https://www.chosic.com/free-music/all/
// Creative Commons CC BY 3.0
// https://creativecommons.org/licenses/by/3.0/

let config = {
    type: Phaser.AUTO,
    render: {
        pixelArt: true
    },
    width: 700, // 1334
    height: 375, // 750
    scene: [ Menu, Play ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    }
}

// define game
let game = new Phaser.Game(config);

let cursors
let { height, width } = game.config

// reserve keyboard vars
let keySPACE;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;