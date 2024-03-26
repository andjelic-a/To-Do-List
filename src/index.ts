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

//Adding Note
function AddNewNote(num: number){
    let inputText = document.querySelector<HTMLInputElement>('.popup-input-text')?.value;
    alert(inputText);
    switch(num){
        case 1:
            break;
        case 2:
            break;
        case 3: 
            break;
    }
}