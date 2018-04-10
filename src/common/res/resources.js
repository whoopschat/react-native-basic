'use strict';

export default {
	configs: 	{
		config_base: require('../assets/configs/config.base.js'),
		config_dev: require('../assets/configs/config.dev.js'),
		config_prod: require('../assets/configs/config.prod.js'),
		device_android: require('../assets/configs/device.android.js'),
		device_ios: require('../assets/configs/device.ios.js')
	},
	locales: 	{
		en: require('../assets/locales/en.js'),
		zh: require('../assets/locales/zh.js')
	}
}