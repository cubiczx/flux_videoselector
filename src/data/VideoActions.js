'use strict';

import VideoActionTypes from './VideoActionTypes';
import VideoDispatcher from './VideoDispatcher';

const Actions = {
  addVideo(title, url, active) {
    VideoDispatcher.dispatch({
      type: VideoActionTypes.ADD_VIDEO,
      title,
      url,
      active,
    });
  },

  changeVideo(id) {
    VideoDispatcher.dispatch({
      type: VideoActionTypes.CHANGE_VIDEO,
      id,
    });
  },
};

export default Actions;