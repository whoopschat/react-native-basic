'use strict';

import './tape/index';
import React from 'react';
import Reducers from './app/reducers';
import Routers from "./app/routers";

export default Tape.App.createApp(Routers, Reducers);