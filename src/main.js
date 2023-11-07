/*
NAME: Saima Mukadam
GAME TITLE: 
HRS SPENT: 10
CREATIVE TILT: I created a pixel-art based game to mimic a platformer game's art style. The basis of my
game is that you are playing as a character and are running along a grassy path collecting stars for points
while avoiding monsters. If you hit a monster you die but you can try killing them first by shooting a beam
at them using the spacebar. The player is competitive against themself as they try to collect more stars and
beat their high score. I'm proud of the art I created because I had no idea where to start at first but I think
it looks decent for my first time. I also chose my background music as something that would hype the player up
as they were playing.
NOTE: I went wrong somewhere and have a bug in my game rendering it not able to be played currently. I'm not sure
how to fix it and I'm out of time now but hopefully you can see through my code parts of the criteria that I've
implemented. Thank you for reading :)
*/

// SOUND CREDITS:
//  Music by Bensound.com/royalty-free-music
//  License code: WX0LH08DZJSTGASG

let config = {
    type: Phaser.AUTO,
    width: 480,
    height: 320,
    scene: [ Menu, Play ],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true, // do i need this
            gravity: {
                x: 1, // change gravity level to wtv normal is
                y: 1
            }
        }
    }
}

// define game
let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keySPACE;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// define globals
