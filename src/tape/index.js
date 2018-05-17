'use strict';

import Assets from './manifest/assets';
import Utils from './vendors/utils';
import Build from './vendors/build';
import Store from './vendors/store';
import Logger from './vendors/logger';
import Http from './vendors/http';
import Config from './vendors/config';
import Bridge from './vendors/bridge';
import Navigation from './vendors/navigation';
import Activity from './vendors/activity';
import App from './vendors/app';

// init bridge
Bridge.listener("RNBridgeConfigs", data => {
    if (typeof data === 'object') {
        Config.setConfig(data)
    }
});
Bridge.ready();

global.Tape = {
    Assets,
    Utils,
    Build,
    Logger,
    Http,
    Bridge,
    Store,
    Config,
    Navigation,
    Activity,
    App
};