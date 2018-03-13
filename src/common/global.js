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
// components
import BaseComponent from './components/base';

// config
Locales.config('zh');

////////////////////////////////////////////////////////
//////// Global
////////////////////////////////////////////////////////

// modules
global.Bridge = Bridge;
// resources
global.Resources = Resources;
global.Locales = Locales;
global.Configs = Configs;
// services
global.Logger = Logger;
global.Store = Store;
global.Http = Http;
// components
global.BaseComponent = BaseComponent;