const gameDevice = [
    "Images/Front_Page_Device/Game_1.gif",
    "Images/Front_Page_Device/Game_2.gif",
    "Images/Front_Page_Device/Game_3.gif",
    "Images/Front_Page_Device/Game_4.gif",
]

const gameDeviceImage = document.querySelector("#game_device_img_1");

let currentIndexGame = 0;
gameDeviceImage.src = gameDevice[currentIndexGame];

const changeGameImage = () => {
    currentIndexGame = (currentIndexGame + 1) % gameDevice.length;
    gameDeviceImage.src = gameDevice[currentIndexGame];
}

const flipTimeGame = 11000

window.document.addEventListener("DOMContentLoaded", () => {
    const intervalIdGame = setInterval(changeGameImage, flipTimeGame);

    const stopIntervalGame = () => {
        clearInterval(intervalIdGame);
    };

    setTimeout(stopIntervalGame, flipTimeGame * 30);
});


const rightSprite = [
    "Images/Spotlight/Featured_Cutouts/Right/Right_1.png",
    "Images/Spotlight/Featured_Cutouts/Right/Right_2.png",
    "Images/Spotlight/Featured_Cutouts/Right/Right_3.png",
    "Images/Spotlight/Featured_Cutouts/Right/Right_4.png",
    "Images/Spotlight/Featured_Cutouts/Right/Right_5.png",
    "Images/Spotlight/Featured_Cutouts/Right/Right_6.png",
    "Images/Spotlight/Featured_Cutouts/Right/Right_7.png",
]

const rightSpriteImage = document.querySelector("#right_sprite");

let currentIndexRight = 0;
rightSpriteImage.src = rightSprite[currentIndexRight];

const changeSpriteImage = () => {
    currentIndexRight = (currentIndexRight + 1) % rightSprite.length;
    rightSpriteImage.src = rightSprite[currentIndexRight];
}

const flipTimeSprite = 750

window.document.addEventListener("DOMContentLoaded", () => {
    const intervalIdRight = setInterval(changeSpriteImage, flipTimeSprite);

    const stopIntervalRight = () => {
        clearInterval(intervalIdRight);
    };

    setTimeout(stopIntervalRight, flipTimeGame * 30);
});