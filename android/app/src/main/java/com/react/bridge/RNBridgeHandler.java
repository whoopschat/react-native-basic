package com.react.bridge;

import android.app.Activity;

import com.facebook.react.bridge.Promise;

import java.util.Map;

/**
 * Created by liangmayong on 2018/2/27.
 */
public interface RNBridgeHandler {
    void handle(Activity activity, String type, Map<String, Object> data, Promise promise);
}
