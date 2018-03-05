'use strict';

import {DeviceEventEmitter, NativeEventEmitter, NativeModules, Platform,} from 'react-native';

const bridge = NativeModules['RNBridgeModule'];

// event
const handlersByType = new Map();

// send
const send = (type, data) => {
    const payload = data !== undefined ? data : {};
    return bridge.send(type, payload);
};

const eventEmitter = Platform.OS === 'ios'
    ? /*ios*/ new NativeEventEmitter(bridge)
    : /*android*/ DeviceEventEmitter;
eventEmitter.addListener('NativeEvent', (body) => {
    const {type, data} = body;
    const handlers = handlersByType.get(type);
    if (!handlers) {
        return;
    }
    handlers.forEach(handler => handler(data));
});

const createRemover = (type, handler) => {
    const remove = () => {
        const handlers = handlersByType.get(type);
        if (!handlers) {
            return;
        }
        const index = handlers.indexOf(handler);
        if (index === -1) {
            return;
        }
        handlers.splice(index, 1);
    };
    return {remove};
};

const on = (type, handler) => {
    if (!handlersByType.has(type)) {
        handlersByType.set(type, []);
    }
    const remover = createRemover(type, handler);
    const handlers = handlersByType.get(type);
    if (handlers.includes(handler)) {
        return remover;
    }
    handlers.push(handler);
    return remover;
};

// put methods together
const RNBridge = {
    send,
    on,
};

export default RNBridge;

