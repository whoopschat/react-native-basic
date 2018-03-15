'use strict';

import './services/prototype';
// modules
import Bridge from './modules/bridge';
// resources
import Resources from './resources/resources';
import Locales from './resources/locales';
import Configs from './resources/configs'
// services
import Logger from './services/logger';
import Store from './services/store';
import Http from './services/http';
import Navigation from './services/navigation';
// components
import BaseComponent from './components/base';

// init locales
Locales.config('zh');

// init bridge
Bridge.listener("RNBridgeConfigs", data => {
  if (typeof data === 'object') {
    Configs.setConfigs(data)
  }
});
Bridge.ready();

////////////////////////////////////////////////////////
//////// set Global
////////////////////////////////////////////////////////

// modules
global.Bridge = Bridge;
// resources
global.Resources = Resources;
global.Locales = Locales;
global.Configs = Configs;
// services
global.Navigation = Navigation;
global.Logger = Logger;
global.Store = Store;
global.Http = Http;
// components
global.BaseComponent = BaseComponent;