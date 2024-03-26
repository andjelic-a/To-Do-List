"use strict";
let num = 0;
function TogglePopup() {
    let popup = document.querySelector('#popup');
    num++;
    if (num == 1) {
        popup === null || popup === void 0 ? void 0 : popup.classList.add('open-popup');
    }
    else {
        popup === null || popup === void 0 ? void 0 : popup.classList.remove('open-popup');
        num = 0;
    }
}
function AddNewNote(num) {
    var _a;
    let inputText = (_a = document.querySelector('.popup-input-text')) === null || _a === void 0 ? void 0 : _a.value;
    alert(inputText);
    switch (num) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
    }
}
//# sourceMappingURL=index.js.map