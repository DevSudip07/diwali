var crackerBtn = document.querySelector('.cracker-btn');
var crackerLayer = document.querySelector('.cracker-overlay');
var crackerSound = document.querySelector('.cracker-sound');
var blessingSound = document.querySelector('.blessing-sound');
var blessingBtn = document.querySelector('.blessing-btn');
var blessing = document.querySelector('.blessing');

crackerBtn.addEventListener('click', () => {
    var cracker = 0;
    setInterval(() => {
        if (cracker == 5) {
            clearInterval();
            crackerLayer.style.display = 'none';
            crackerSound.pause();
        } else {
            cracker++
            crackerLayer.style.display = 'block';
            crackerSound.play();
        }
    }, 1500);
});

var blessingVal = 0;
blessingBtn.addEventListener('click', ()=> {
    blessing.scrollIntoView();
    blessingVal = 1;
    if(blessingVal == 1){
        blessingSound.play();
    }else {
        blessingSound.pause();
    }
});


