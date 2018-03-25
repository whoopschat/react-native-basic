# React Native Basic
> An react native client basic

## Get Started

* it's recommended to work with following tools
    - `vscode` + Extensions: `EditorConfig`, `ESLint`, `React Native Tools`
    - `React Native Debugger`
* make sure `node` is installed, node v9.5.0 is tested, use [n](https://github.com/tj/n) to manage node version
* run `yarn install` or `npm install` to install dependencies
* run `npm run ios` to start debug with iOS Simulator
* start Android emulator and run `npm run android` to start debug with android emulator
* run `npm run test` for basic test
* to debug with `React Native Debugger`
    - launch `React Native Debugger`
    - press `Cmd+D` on iOS/`Cmd+M` on Android for dev menu
    - select `Start Remote JS Debugging`
* run `npm run package-ios` to build ios js bundle
* run `npm run package-android` to build android js bundle

## Folder Structure

* `__tests__/`: test files
* `android/`: android native project
* `ios/`: ios native project
* `node_modules/`: node dependencies
* `src/`: main source code
    - `app/`: app components, models, routers, screens
    - `common/`: base component, modules ,services, global
    - `res/`: resources, assets, configs, locales
    
## Resources Manager Plugin
[React Assets Manager](https://github.com/whoopschat/react-assets-manager)

The plug-in can automatically generate resources.js files from the res directory

`/src/res  => resources.js`
```
'use strict';

export default {
	assets: 	{
		watermark: require('../../res/assets/watermark.jpg')
	},
	configs: 	{
		config_android: require('../../res/configs/config.android.js'),
		config_base: require('../../res/configs/config.base.js'),
		config_dev: require('../../res/configs/config.dev.js'),
		config_ios: require('../../res/configs/config.ios.js'),
		config_prod: require('../../res/configs/config.prod.js')
	},
	locales: 	{
		en: require('../../res/locales/en.js'),
		zh: require('../../res/locales/zh.js')
	}
}
```
