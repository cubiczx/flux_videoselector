/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

import AppContainer from './containers/AppContainer';
import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/scss/app.scss';

ReactDOM.render(<AppContainer />, document.getElementById('videoapp'));

// We will remove these lines later:

import VideoActions from './data/VideoActions';

VideoActions.addVideo('David Bisbal, Sebastian Yatra - A Partir De Hoy', 'Iwz4P8HfGVM', true);
VideoActions.addVideo('Maluma - El Préstamo', '-BQJo3vK8O8', false);
VideoActions.addVideo('Nicky Jam x J. Balvin - X (EQUIS)', '_I_D_8Z4sJE', false);