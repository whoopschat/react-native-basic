'use strict';

import {getAPI, postAPI} from '../../common/services/api';

export const demoPostApi = () => {
    return postAPI('/api/index.php', {
        key1: 'value1'
    }, {
        headers: {
            value: 'key',
            key: 'value'
        }
    }, 1000)
};

export const demoGetApi = () => {
    return getAPI('/api/index.php', {
        key1: 'value1'
    }, {
        headers: {
            value: 'key',
            key: 'value'
        }
    })
};

