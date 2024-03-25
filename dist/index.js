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
//# sourceMappingURL=index.js.map