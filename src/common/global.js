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
import Screen from './components/screen';

Locales.config("zh");

global.Config = Config;
global.Bridge = Bridge;
global.Resources = Resources;
global.Locales = Locales;
global.Logger = Logger;
global.Store = Store;
global.Http = Http;
global.ScreenComponent = Screen.ScreenComponent;