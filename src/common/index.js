'use strict';

import './services/prototype';
// resources
import Resources from './resources/resources';
import Locales from './resources/locales';
import Configs from './resources/configs'
// services
import Logger from './services/logger';
import Store from './services/store';
import Http from './services/http';
import Navigation from './services/navigation';
import Bridge from './services/bridge';
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
// resources
global.Resources = Resources;
global.Locales = Locales;
global.Configs = Configs;
// services
global.Logger = Logger;
global.Store = Store;
global.Http = Http;
global.Navigation = Navigation;
global.Bridge = Bridge;
// components
global.BaseComponent = BaseComponent;