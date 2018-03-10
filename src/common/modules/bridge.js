'use strict';

// dummy bridge as default
import bridgeInstance from './impl/bridgeImpl'

const BridgeProxy = {
    /// returns promise
    send(type, data) {
        return bridgeInstance.send(type, data);
    },

    /// returns { remove }
    on(type, handler) {
        return bridgeInstance.on(type, handler);
    },
};

BridgeProxy.send('RNBridgeReady');

export default BridgeProxy;
