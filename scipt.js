const yourText = document.getElementById('yourText');
const textKeys = document.querySelectorAll('.textKey');
const textKey = document.querySelector('.textKey');
const hiddenKeys = document.querySelectorAll('.hiddenKey');
const notHiddenKeys = document.querySelectorAll('.notHiddenKey');
document.addEventListener('keydown', function (e) {
    function inputValue() {
        if (document.querySelector('.capsLosk').classList.contains('capsLosk__active') || document.querySelector('.shift').classList.contains('shift__active')) {
            for (let textButtons of textKeys) textButtons.classList.add('textKey__BigLetters');
            if (key.classList.contains('textKey')) yourText.value += key.value;
            for(let hiddenButton of hiddenKeys) hiddenButton.style.display = 'flex';
            for(let notHiddenButton of notHiddenKeys) notHiddenButton.style.display = 'none';
        } else {
            for (let textButtons of textKeys) textButtons.classList.remove('textKey__BigLetters');
            if (key.classList.contains('textKey')) yourText.value += key.textContent;
            for(let hiddenButton of hiddenKeys) hiddenButton.style.display = 'none';
            for(let notHiddenButton of notHiddenKeys) notHiddenButton.style.display = 'flex';
        }
    }
    let target = e.keyCode;
    const key = document.querySelector(`.key${target}`);
    key.style.boxShadow = "none";
    if (target == 13) document.querySelector('.enterPart2').style.boxShadow = 'none';
    if (target == 16 && e.location == 2) {
        document.querySelector('.shiftLoc2').style.boxShadow = 'none';
        document.querySelector('.shift').style.boxShadow = "0 0 5px #333";
    }
    if (target == 55 && e.location == 2) {
        document.querySelector('.comandLoc2').style.boxShadow = 'none';
        document.querySelector('.comand').style.boxShadow = "0 0 5px #333";
    }
    if (target == 61 && e.location == 2) {
        document.querySelector('.optionLoc2').style.boxShadow = 'none';
        document.querySelector('.option').style.boxShadow = "0 0 5px #333";
    }
    if (target == 20) {
        document.querySelector('.capsLosk').classList.toggle('capsLosk__active');
        inputValue()
    }
    if (target == 16 || target == 16 && e.location == 2) {
        document.querySelector('.shift').classList.add('shift__active');
        inputValue()
    }
    inputValue()
    if (target == 46 || target == 8) yourText.value = '';
    if (target == 49 || target == 32) yourText.value += ' ';
});
document.addEventListener('keyup', function (e) {
    let target = e.keyCode;
    const key = document.querySelector(`.key${target}`);
    key.style.boxShadow = "0 0 5px #333";
    if (target == 13) document.querySelector('.enterPart2').style.boxShadow = "0 0 5px #333";
    if (target == 16 && e.location == 2) document.querySelector('.shiftLoc2').style.boxShadow = "0 0 5px #333";
    if (target == 16 || target == 16 && e.location == 2) {
        document.querySelector('.shift').classList.remove('shift__active');
        for (let textButtons of textKeys) textButtons.classList.remove('textKey__BigLetters');
        for(let hiddenButton of hiddenKeys) hiddenButton.style.display = 'none';
        for(let notHiddenButton of notHiddenKeys) notHiddenButton.style.display = 'flex';
    }
});