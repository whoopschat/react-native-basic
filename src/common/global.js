'use strict';

import Config from './config'
import Lang from './services/lang';
import Log from './services/log';
import Bridge from './modules/bridge';
import {applyPrototype} from "./services/proto";

applyPrototype();

global.Config = Config;
global.Log = Log;
global.Lang = Lang;
global.Bridge = Bridge;