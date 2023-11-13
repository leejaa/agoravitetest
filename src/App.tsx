import { useState } from "react";
import AgoraUIKit from "agora-react-uikit";

import "./App.css";

function App() {
  const [videoCall, setVideoCall] = useState(true);

  const rtcProps = {
    appId: "d83ce79b868144b4b1465f419b8b1c05",
    channel: "test5",
    token:
      "007eJxTYBD8+e8uf9lprscyHw1e3ooO2P3amTfP7zz3xmf+3Hb3rz9UYEixME5ONbdMsjCzMDQxSTJJMjQxM00zMQSKJBkmG5h2Xg9MbQhkZHBbG8DIyACBID4rQ0lqcYkpAwMA3M4gxQ==",
  };

  const callbacks = {
    EndCall: () => setVideoCall(false),
  };

  return videoCall ? (
    <div style={{ display: "flex", width: "100vw", height: "100vh" }}>
      <AgoraUIKit rtcProps={rtcProps} callbacks={callbacks} />
    </div>
  ) : (
    <h3 onClick={() => setVideoCall(true)}>Join</h3>
  );
}

export default App;
