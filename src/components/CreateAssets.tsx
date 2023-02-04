import React from 'react';
import {Button, TextInput, View} from 'react-native';
import Mux from '@mux/mux-node';
import {MUX_TOKEN_ID, MUX_TOKEN_SECRET} from '@env';

const CreateAssets = () => {
  const [videoUrl, setVideoUrl] = React.useState<string>('');
  const {Video: MUXVideo} = new Mux(MUX_TOKEN_ID ?? '', MUX_TOKEN_SECRET ?? '');

  const handleVideoUpload = async () => {
    const asset = await MUXVideo.Assets.create({
      input: videoUrl,
      playback_policy: 'public',
    });
    console.log(asset);
  };
  return (
    <View>
      <TextInput
        value={videoUrl}
        onChangeText={setVideoUrl}
        style={{
          width: 300,
          padding: 10,
          backgroundColor: '#eee',
          color: '#000',
          fontSize: 14,
          borderWidth: 1,
          borderRadius: 8,
        }}
      />
      <Button onPress={() => handleVideoUpload} title="Create" />
    </View>
  );
};

export default CreateAssets;
