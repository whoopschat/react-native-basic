'use strict';

import './common/index';
import React from 'react';
import Reducers from './app/reducers';
import Routers from "./app/routers";

export default App.createApp(Routers, Reducers);