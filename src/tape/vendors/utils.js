'use strict';
/** ----------------------------------------
 *  Common module
 *  ---------------
 *  utils.js
 ---------------------------------------- **/

const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);

const randomUUID = () => (S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4());

export default {
    randomUUID
}
