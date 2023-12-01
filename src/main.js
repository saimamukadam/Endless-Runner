/*
NAME: Saima Mukadam
GAME TITLE: STAR RUN
HRS SPENT: 12
CREATIVE TILT: I created a pixel-art based game to mimic a platformer game's art style. The basis of my
game is that you are playing as a character and are running along a grassy path collecting stars for points
while dodging rain clouds. The player is competitive against themself as they try to collect more stars and 
beat their high score. I'm proud of the art I created because I had no idea where to start at first but I think 
it looks nice for my first time. I had to learn how to use asesprite and it took me a while to get the hang of 
it, but I was able to learn it quickly and created all of my visual assets through it. I also like my background 
music and chose it because I felt that it would hype the player up as they were playing and was also a unique
choice of background music.
*/

// SOUND CREDITS:
//  Music by Bensound.com/royalty-free-music
//  License code: WX0LH08DZJSTGASG

let config = {
    type: Phaser.AUTO,
    width: 700, // 1334
    height: 375, // 750
    scene: [ Menu, Play ],
    physics: {
        default: 'arcade',
        /*arcade: {
            debug: true, // do i need this
            gravity: {
                x: 1, // change gravity level to wtv normal is
                y: 1
            }
        } */
    }
}

// define game
let game = new Phaser.Game(config);

// global game options
let gameOptions = {
    // platform speed range, in pixels per second
    platformSpeedRange: [300, 400],
    // spawn range, how far should be the rightmost platform from the right edge
    // before next platform spawns, in pixels
    spawnRange: [80, 300],
    // platform width range, in pixels
    platformSizeRange: [90, 300],
    // a height range between rightmost platform and next platform to be spawned
    platformHeightRange: [-10, 10],
    // a scale to be multiplied by platformHeightRange
    platformHeighScale: 10,
    // platform max and min height, as screen height ratio
    platformVerticalLimit: [0.4, 0.8],
    // player gravity
    playerGravity: 900,
    // player jump force
    jumpForce: 400,
    // player starting X position
    playerStartPosition: 200,
    // consecutive jumps allowed
    jumps: 2
}

// reserve keyboard vars
let keyF, keySPACE;

//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// define globals
