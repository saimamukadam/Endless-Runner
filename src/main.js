/*
NAME: Saima Mukadam
GAME TITLE: RUN CARL RUN !!!
HRS SPENT: 35
CREATIVE TILT: I created a pixel-art based game to mimic a platformer game's art style. The basis of my
game is that you are playing as a character named Carl and are running along a grassy path collecting stars 
for points while dodging monsters. The player is competitive against themself as they try to collect as many
points as they can. I'm proud of the art I created because this was my first time creating pixel art and using
Asesprite. I was able to get the hang of it quickly and I created all of my visual assets through it. I also 
like my background music and chose it because I felt that it's a fun song and suits the game's art. I also like
my star-collecting sound, jump sound, and death sound because they suit the actions they correspond with and also
suit the pixel-art style. I spent the majority of time on gameplay and learned how to implement many things such 
as collisions, jumping, animation, and more. I had to experiment a lot with the speeds of my moving objects to make
it all in unison. In the future I'd implement a better-looking Title screen and a better way for the player to know 
the game has reset and they died instead of just the score and sprites resetting. I'm proud of this game as it's my
first big game project and I'm excited for my friends and family to play it.
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
            //debug: true
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