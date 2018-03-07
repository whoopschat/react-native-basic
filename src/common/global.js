'use strict';

import "./services/proto";
import Config from './config'
import Lang from './services/lang';
import Log from './services/log';
import Bridge from './modules/bridge';
import Routers from "./services/routers";

global.RouteScreen = Routers.RouteScreen;
global.Config = Config;
global.Log = Log;
global.Lang = Lang;
global.Bridge = Bridge;