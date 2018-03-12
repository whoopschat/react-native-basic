'use strict';

import './services/prototype';
import Config from './config'
// modules
import Bridge from './modules/bridge';
// resources
import Resources from './resources/resources';
import Locales from './resources/locales';
// services
import Logger from './services/logger';
import Store from './services/store';
import Http from './services/http';
// components
import BaseComponent from './components/base';

Locales.config('zh');

////////////////////////////////////////////////////////
//////// Global
////////////////////////////////////////////////////////

global.Config = Config;
// modules
global.Bridge = Bridge;
// resources
global.Resources = Resources;
global.Locales = Locales;
// services
global.Logger = Logger;
global.Store = Store;
global.Http = Http;
// components
global.BaseComponent = BaseComponent;