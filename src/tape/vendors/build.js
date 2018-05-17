'use strict';
/** --------------------------------------
 *  Common module
 *  ---------------
 *  device.js
 -------------------------------------- **/

import {Platform} from "react-native";

const isProd = process.env.NODE_ENV === 'production';

export default {
    OS: Platform.OS,
    isProd: isProd
}