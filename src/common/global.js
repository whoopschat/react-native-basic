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
// react-native
import {Platform} from "react-native";

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
global.Navigation = Navigation;
global.Logger = Logger;
global.Store = Store;
global.Http = Http;
// components
global.BaseComponent = BaseComponent;
// react-native
global.Build = {
  OS: Platform.OS
};