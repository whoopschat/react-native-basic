'use strict';

import "./services/prototype";
import Config from './config'
import Lang from './services/lang';
import Logger from './services/logger';
import Screen from "./services/screen";
import Store from './services/store';
import Resources from "./services/resources";
import Bridge from './modules/bridge';

global.ScreenComponent = Screen.ScreenComponent;
global.Config = Config;
global.Logger = Logger;
global.Lang = Lang;
global.Resources = Resources;
global.Store = {
  configureStore: Store.configureStore,
  connectState: Store.connectState
};
global.Bridge = Bridge;