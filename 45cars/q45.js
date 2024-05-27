"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function storeCarInfo(manufacturer, modleName, ...extraOption) {
    const carinfo = Object.assign({ manufacturer,
        modleName }, Object.assign({}, ...extraOption));
    return carinfo;
}
let ans = storeCarInfo('Honda', 'Civic', { colour: 'Black' }, { features: ['nevigation', 'powerwindow'] });
console.log(ans);
