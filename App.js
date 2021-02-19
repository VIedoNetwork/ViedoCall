import React, { useState } from 'react';
import AgoraUIKit from 'agora-rn-uikit';
 
const App = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: 'ff7230aea39f4042838bfb4fe995a24c',
    channel: 'test',
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
  ) : (
    <></>
  );
};
 
export default App;