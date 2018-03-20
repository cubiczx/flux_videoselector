'use strict';

import Immutable from 'immutable';

const Video = Immutable.Record({
  id: '',
  title: '',
  url: '',
  active: false,
});

export default Video;