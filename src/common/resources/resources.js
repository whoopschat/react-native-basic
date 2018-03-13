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