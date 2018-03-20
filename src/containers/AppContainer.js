'use strict';

import AppView from '../views/AppView';
import {Container} from 'flux/utils';
import VideoActions from '../data/VideoActions';
import VideoStore from '../data/VideoStore';

function getStores() {
  return [
    VideoStore,
  ];
}

function getState() {
  return {
    videos: VideoStore.getState(),

    onChangeVideo: VideoActions.changeVideo,
  };
}

export default Container.createFunctional(AppView, getStores, getState);