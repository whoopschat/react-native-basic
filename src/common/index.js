'use strict';

import './vendors/prototype';
// resources
import Resources from '../common/resources/resources';
import Locales from '../common/resources/locales';
import Configs from '../common/resources/configs'
// vendors
import Logger from './vendors/logger';
import Store from './vendors/store';
import Http from './vendors/http';
import Navigation from './vendors/navigation';
import Bridge from './vendors/bridge';
// components
import BaseComponent from '../common/components/base';

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
// vendors
global.Logger = Logger;
global.Store = Store;
global.Http = Http;
global.Navigation = Navigation;
global.Bridge = Bridge;
// components
global.BaseComponent = BaseComponent;