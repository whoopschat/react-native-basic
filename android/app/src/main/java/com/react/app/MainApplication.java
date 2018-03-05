package com.react.app;

import android.app.Activity;
import android.app.Application;
import android.widget.Toast;

import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.Promise;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

import com.react.bridge.RNBridgeConstants;
import com.react.bridge.RNBridgeHandler;
import com.react.bridge.RNBridgeModule;
import com.react.bridge.RNBridgePackage;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
            return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
            return Arrays.asList(
                    new MainReactPackage(), new RNBridgePackage()
            );
        }

        @Override
        protected String getJSMainModuleName() {
            return "index";
        }
    };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
        RNBridgeModule.postSticky("init", null);
        RNBridgeModule.register(RNBridgeConstants.MODULE_READY, new RNBridgeHandler() {
            @Override
            public void handle(Activity activity, String type, Map<String, Object> data, Promise promise) {
                Toast.makeText(activity, RNBridgeConstants.MODULE_READY, Toast.LENGTH_SHORT).show();
                promise.resolve(null);
            }
        });
        RNBridgeModule.register("login", new RNBridgeHandler() {
            @Override
            public void handle(Activity activity, String type, Map<String, Object> data, Promise promise) {
                Toast.makeText(activity, data + "", Toast.LENGTH_SHORT).show();
                promise.resolve(null);
                RNBridgeModule.postSticky("init", null);
            }
        });
    }
}
