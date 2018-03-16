'use strict';

import {DeviceEventEmitter, NativeEventEmitter, NativeModules, Platform,} from 'react-native';

const bridgeModuleName = 'RNBridgeModule';
const bridgeModuleEmitEvent = 'RNBridgeEvent';
const bridgeNativeHandleEvent = 'handleJsEvent';
const bridgeReadyEvent = 'RNBridgeReady';

const createBridge = () => {
  if (NativeModules.hasOwnProperty(bridgeModuleName)) {
    const bridge = NativeModules[bridgeModuleName];

    // event
    const handlersByType = new Map();

    // send
    const send = (type, data) => {
      const payload = data !== undefined ? data : {};
      if (bridge.hasOwnProperty(bridgeNativeHandleEvent)) {
        const handle = bridge[bridgeNativeHandleEvent];
        if (typeof handle === 'function') {
          return handle(type, payload)
        }
      }
      console.error(bridgeModuleName + " can't find the " + bridgeNativeHandleEvent + " method");
    };

    const eventEmitter = Platform.OS === 'ios'
      ? /*ios*/ new NativeEventEmitter(bridge)
      : /*android*/ DeviceEventEmitter;

    eventEmitter.addListener(bridgeModuleEmitEvent, (body) => {
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

    const listener = (type, handler) => {
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

    const ready = () => {
      return send(bridgeReadyEvent);
    };

    return {
      send,
      listener,
      ready
    };
  } else {
    return {
      send: () => Promise.resolve({}),
      listener: () => Promise.resolve({}),
      ready: () => Promise.resolve({})
    };
  }
};

const bridge = createBridge();

export default bridge;

