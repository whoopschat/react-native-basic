'use strict';

import './services/prototype';
import Config from './config'
import Languages from './resources/languages';
import Logger from './services/logger';
import Screen from './services/screen';
import Store from './services/store';
import Resources from './resources/resources';
import Bridge from './modules/bridge';

global.ScreenComponent = Screen.ScreenComponent;
global.Config = Config;
global.Logger = Logger;
global.Resources = Resources;
global.Lang = Languages;
global.Store = {
  configureStore: Store.configureStore,
  connectState: Store.connectState
};
global.Bridge = Bridge;