'use strict';

import "./services/proto";
import Config from './config'
import Lang from './services/lang';
import Log from './services/log';
import Routers from "./services/router";
import Store from "./services/store";
import Bridge from './modules/bridge';

global.RouteScreen = Routers.RouteScreen;
global.Config = Config;
global.Log = Log;
global.Lang = Lang;
global.Store = Store;
global.Bridge = Bridge;