import app from '../../package.json';
import Video from 'react-native-video';
import React from 'react';
// import {ENV_KEY} from '@env';
import muxReactNativeVideo from '@mux/mux-data-react-native-video';
import {StyleSheet} from 'react-native';

const MuxVideo = muxReactNativeVideo(Video);

const styles = StyleSheet.create({
  video: {
    width: '100%',
    height: '100%',
  },
});

const VideoPlayer = () => {
  return (
    <MuxVideo
      style={styles.video}
      source={{
        uri: 'https://stream.mux.com/IGSHFa02eAyj7cjVzhqX02uNPZgylyq88O3jymiiBEfzo.m3u8',
      }}
      controls
      muted
      muxOptions={{
        application_name: app.name,
        application_version: app.version,
        playback_id: 'My Playback Id',
        data: {
          // env_key: ENV_KEY,
          video_id: 'My Video Id',
          video_title: 'My awesome video',
          player_software_version: '5.0.2',
          player_name: 'React Native Player',
        },
      }}
    />
  );
};
export default VideoPlayer;
