package com.react.bridge;

import android.os.Bundle;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

import java.lang.ref.WeakReference;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by liangmayong on 2018/2/27.
 */
public class RNBridgeModule extends ReactContextBaseJavaModule {


    private static final List<WeakReference<RNBridgeModule>> INSTANCES = new ArrayList<>();
    private static final Map<String, RNBridgeHandler> HANDLERS = new HashMap<>();
    private static final Map<String, Event> STICKY_EVENTS = new HashMap<>();

    private boolean mReady = false;
    private List<Event> mPendingEvents = new ArrayList<>();

    RNBridgeModule(ReactApplicationContext reactContext) {
        super(reactContext);
        INSTANCES.add(new WeakReference<>(this));
    }

    public static void register(String type, RNBridgeHandler handler) {
        if (handler == null) {
            HANDLERS.remove(type);
        } else {
            HANDLERS.put(type, handler);
        }
    }

    public static void postSticky(String type, Map<String, Object> data) {
        if (data == null) {
            data = new HashMap<>();
        }
        Event event = new Event(type, data);
        STICKY_EVENTS.put(type, event);
        for (int i = 0; i < INSTANCES.size(); i++) {
            RNBridgeModule module = INSTANCES.get(i).get();
            if (module != null) {
                module.handleStickySendNativeEvent(event);
            }
        }
    }

    public static void post(String type, Map<String, Object> data) {
        Event event = new Event(type, data);
        for (WeakReference<RNBridgeModule> ref : INSTANCES) {
            RNBridgeModule module = ref.get();
            if (module != null) {
                // compose params
                module.handlePendingSendNativeEventWith(event);
            }
        }
    }

    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////

    @Override
    public String getName() {
        return RNBridgeConstants.MODULE_NAME;
    }

    @ReactMethod
    public void send(String type, ReadableMap data, Promise promise) {
        if (type.equals(RNBridgeConstants.MODULE_READY)) {
            mReady = true;
            for (int i = 0; i < mPendingEvents.size(); i++) {
                handlePendingSendNativeEventWith(mPendingEvents.get(i));
            }
            mPendingEvents.clear();
            for (Map.Entry<String, Event> entry : STICKY_EVENTS.entrySet()) {
                handlePendingSendNativeEventWith(entry.getValue());
            }
        }
        RNBridgeHandler handler = HANDLERS.get(type);
        if (handler != null) {
            handler.handle(getCurrentActivity(), type, data == null ? new HashMap<String, Object>() : data.toHashMap(), new PromiseProxy(promise));
        } else {
            promise.resolve(null);
        }
    }

    private void handleStickySendNativeEvent(Event event) {
        if (!mReady) {
            return;
        }
        // send event by device event emitter
        this.getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(RNBridgeConstants.MODULE_EMIT_EVENT, event.toWritableMap());
    }

    private void handlePendingSendNativeEventWith(Event event) {
        if (!mReady) {
            mPendingEvents.add(event);
            return;
        }
        // send event by device event emitter
        this.getReactApplicationContext()
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                .emit(RNBridgeConstants.MODULE_EMIT_EVENT, event.toWritableMap());
    }

    private static class Event {

        private String type;
        private Map<String, Object> data;

        Event(String type, Map<String, Object> data) {
            this.type = type;
            this.data = data;
        }

        WritableMap toWritableMap() {
            WritableMap body = Arguments.createMap();
            body.putString("type", type);
            body.putMap("data", Arguments.makeNativeMap(data));
            return body;
        }

    }

    private static class PromiseProxy implements Promise {
        private Promise mTarget;

        PromiseProxy(Promise target) {
            mTarget = target;
        }

        // this method is copied from com.facebook.react.bridge.Arguments where it's a private method
        static Object makeNativeObject(Object object) {
            if (object == null) {
                return null;
            } else if (object instanceof Float ||
                    object instanceof Long ||
                    object instanceof Byte ||
                    object instanceof Short) {
                return ((Number) object).doubleValue();
            } else if (object.getClass().isArray()) {
                return Arguments.makeNativeArray(object);
            } else if (object instanceof List) {
                return Arguments.makeNativeArray((List) object);
            } else if (object instanceof Map) {
                Map<String, Object> objectMap = new HashMap<>();
                for (Object key : ((Map) object).keySet()) {
                    objectMap.put(key + "", ((Map) object).get(key));
                }
                return Arguments.makeNativeMap(objectMap);
            } else if (object instanceof Bundle) {
                return Arguments.makeNativeMap((Bundle) object);
            } else {
                // Boolean, Integer, Double, String, WritableNativeArray, WritableNativeMap
                return object;
            }
        }

        @Override
        public void resolve(Object value) {
            // convert to native object
            mTarget.resolve(makeNativeObject(value));
        }

        @Override
        public void reject(String code, String message) {
            mTarget.reject(code, message);
        }

        @Override
        public void reject(String code, Throwable e) {
            mTarget.reject(code, e);
        }

        @Override
        public void reject(String code, String message, Throwable e) {
            mTarget.reject(code, message, e);
        }

        @Deprecated
        @Override
        public void reject(String message) {
            mTarget.reject(message);
        }

        @Override
        public void reject(Throwable reason) {
            mTarget.reject(reason);
        }
    }
}
