# React Native Basic
a react native client basic

## Get Started

* it's recommended to work with following tools
    - `vscode` + Extensions: `EditorConfig`, `ESLint`, `React Native Tools`
    - `React Native Debugger`
* make sure `node` is installed, node v9.5.0 is tested, use [n](https://github.com/tj/n) to manage node version
* run `npm install` to install dependencies
* run `npm run ios` to start debug with iOS Simulator
* start Android emulator and run `npm run android` to start debug with android emulator
* run `npm run test` for basic test
* to debug with `React Native Debugger`
    - launch `React Native Debugger`
    - press `Cmd+D` on iOS/`Cmd+M` on Android for dev menu
    - select `Start Remote JS Debugging`

## Folder Structure

* `__tests__/`: test files
* `android/`: android native project
* `ios/`: ios native project
* `node_modules/`: node dependencies
* `src/`: main source code
    - `app/`: api,components,screens
    - `common/`: languages,modules,services,global and config
    - `redux/`: stores

