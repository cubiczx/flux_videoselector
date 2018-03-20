'use strict';

import Counter from './Counter';
import Immutable from 'immutable';
import {ReduceStore} from 'flux/utils';
import Video from './Video';
import VideoActionTypes from './VideoActionTypes';
import VideoDispatcher from './VideoDispatcher';

class VideoStore extends ReduceStore {
  constructor() {
    super(VideoDispatcher);
  }

  getInitialState() {
    return Immutable.OrderedMap();
  }

  // changeState(state, video_id, active) {
  //   return state.update(
  //     video_id,
  //     video => video.set("active", active),
  //   )
  // }

  reduce(state, action) {
    switch (action.type) {
      case VideoActionTypes.ADD_VIDEO:
        // Don't add videos with no text.
        if (!action.url || !action.title) {
          return state;
        }
        const id = Counter.increment();
        return state.set(id, new Video({
          id,
          title: action.title,
          url: action.url,
          active: action.active,
        }));

      case VideoActionTypes.CHANGE_VIDEO:
        console.log(state);
        return state.map(video => video.set('active', video.id === action.id ? true : false));

        // let active = false;
        // return state.map(video =>
        //   // console.log(state);
        //   // console.log(video.id);
        //   // console.log(action.id);
        //   // active = video.active
        //   // video.id === action.id
        //   //   ? active = true
        //   //   : active = false
        //   // console.log(active);
        //   // this.changeState(state, video.id, active);
          
        //   video.set('active', video.id === action.id ? true : false)
        //   // return state.update(
        //   //     video.id,
        //   //     video => video.set("active", active),
        //   // )
          
        //   // state.setIn([video.id, 'active'], active);
        //   // return state.setIn(['id-3', 'active'], true);
        //   // state.setIn(['id-3', 'active'], active);
        //   // return state;
        //   // console.log(state);
        // );
      
      // const areAllActive = state.every(video => video.active);
      // console.log(areAllActive);
        
        // return state.map(video => video.set('active', !areAllActive));
        
        // console.log(action.id);
        // state.map(function(video) {
        //   video.id === action.id ? video => video.set('active', !video.active) : video => video.set('active', video.active);
        // });
        // 
        // return {
        //     ...state,
        //     videos: state.videos.map(video => video.id === action.id ?
        //         // transform the one with a matching id
        //         { ...video, active: true } : 
        //         // otherwise return original todo
        //         video
        //     ) 
        // };
        
        // console.log(state.map(video => video.id));
        
        // let index = state.videos.findIndex(video => video.id === action.id);
        // let videos = [...videos];
        // videos[index] = {...videos, active: true};
        // return {...state, videos}

        // return state.update(state.map(function(video) {
        //     if(video.id === action.id) {
        //       video.active = true;
        //     }else{
        //       video.active = false;
        //     }
        //     return video; 
        // }));

        // let active = false;
        // state.forEach(function(video) {
        //     console.log(video.id);
        //     console.log(action.id);
        //     active = video.active;
        //     video.id === action.id
        //       ? active = true
        //       : active = false
        //     return state.update(
        //       video.id,
        //       video => video.set("active", active),
        //     )
        // });

        // return state.map(video => video.set('active', !areAllActive));

       // return state.setIn(['id-3', 'active'], active);
       
       // return state.update(
       //    'id-3',
       //    video => video.set('active', true),
       //  );
        
       // console.log(state);
       // return state;

      default:
        return state;
    }
  }
}

export default new VideoStore();