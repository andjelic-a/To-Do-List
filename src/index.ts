//Creating popup
let num: number = 0;
function TogglePopup() {
    let popup = document.querySelector('#popup');
    num++;
    if (num == 1) {

        popup?.classList.add('open-popup');
    }
    else {
        popup?.classList.remove('open-popup');
        num = 0;
    }
}