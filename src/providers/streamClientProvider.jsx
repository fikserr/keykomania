import {StreamVideoClient, StreamVideo, StreamCall,} from "@stream-io/video-react-sdk";

const apiKey = import.meta.env.REACT_PUBLIC_STREAM_API_KEY;


const client = new StreamVideoClient({ apiKey, token });
const call = client.call("default", "my-first-call");
call.join({ create: true });


export const StreamVideoProvider = () => {
    
  return (
    <StreamVideo client={client}>
      <StreamCall call={call}>
   
      </StreamCall>
    </StreamVideo>
  );
};
