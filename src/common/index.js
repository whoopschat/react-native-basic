'use strict';

import './vendors/prototype';
// resources
import Resources from './resources/resources';
import Locales from './vendors/locales';
import Configs from './vendors/configs';
// vendors
import UUID from './vendors/uuid';
import Logger from './vendors/logger';
import Platform from './vendors/device';
import Store from './vendors/store';
import Http from './vendors/http';
import Navigation from './vendors/navigation';
import Bridge from './vendors/bridge';
import Activity from './vendors/activity';
import App from './vendors/app';

// init bridge
Bridge.listener("RNBridgeConfigs", data => {
  if (typeof data === 'object') {
    Configs.setConfigs(data)
  }
});
Bridge.ready();

////////////////////////////////////////////////////////
//////// init Global
////////////////////////////////////////////////////////

// resources
global.Resources = Resources;
// vendors
global.UUID = UUID;
global.Device = Platform;
global.Locales = Locales;
global.Configs = Configs;
global.Logger = Logger;
global.Store = Store;
global.Http = Http;
global.Navigation = Navigation;
global.Bridge = Bridge;
global.App = App;
global.Activity = Activity;