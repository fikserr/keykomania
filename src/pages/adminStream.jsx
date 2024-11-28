import {
  CallControls,
  SpeakerLayout,
  StreamCall,
  StreamTheme,
  StreamVideo,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";



function AdminStream() {
  return (
    <div>
      <StreamVideo client={client}>
        <StreamCall call={call}>
          <StreamTheme>
            <SpeakerLayout />
                <CallControls />
          </StreamTheme>
        </StreamCall>
      </StreamVideo>
    </div>
  );
}

export default AdminStream;
