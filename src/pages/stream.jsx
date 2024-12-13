import {
  LivestreamPlayer,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/ui/logo";
import { getData } from "../store/getToken";
import ChatUser from "../components/shared/chat";
import Members from "../icons/members";
import CircleLive from "../icons/circleLive";
import Circle from "../icons/circle";
import ChatIcon from "../icons/chatIcon";
import { getTokenCallID } from "../store/getTokenAppWrite";
import { STREAM_API_KEY } from "../config/appwriteConfig";

export default function Stream() {
  const [setChat, seeSetChat] = useState(true);
  const dispatch = useDispatch();
  const apiKey = STREAM_API_KEY;
  const userId = "fikserr";
  const user = {
    id: userId,
    name: "fikserr",
  };
  const { dataApp } = useSelector((state) => state.getAppWriteToken);
  const streamKeys = dataApp.reverse()
  const stream_token = streamKeys[0]?.[0]?.stream_token || 'No token available';
const stream_callID = streamKeys[0]?.[0]?.stream_call_id || 'No call ID available';
  
  const clientRef = useRef(null);
  const [call, setCall] = useState(null);

  useEffect(() => {
    dispatch(getData("https://keykomania-server.onrender.com/api"));
    dispatch(getTokenCallID());
    console.log(stream_callID, stream_token);
  }, [dispatch]);

  useEffect(() => {
    if (stream_token && stream_callID && !clientRef.current) {
      clientRef.current = StreamVideoClient.getOrCreateInstance({
        apiKey,
        user,
        token: stream_token,
      });
      console.log(stream_callID, stream_token);
      const existingCall = clientRef.current.call("livestream", stream_callID);
      existingCall.camera.disable();
      existingCall.microphone.disable();
      existingCall.join();
      setCall(existingCall);
    }
  }, [stream_token, stream_callID]);

  return (
    <StreamVideo client={clientRef.current}>
      <div className="relative w-full min-h-[762px] md:min-h-[1269px] lg:min-h-[1269px]">
        <div className="absolute inset-0 bg-nav-back bg-yellow-50 blur-[3px] brightness-80 bg-cover bg-center"></div>
        <div className="relative z-10 w-full pt-[29px] md:pt-[34px] lg:pt-9">
          <NavLink to="/">
            <Logo
              className="font-Stray font-bold text-white text-[60px] leading-[72px]"
              icon="fill-white size-2 md:size-5"
            />
          </NavLink>
          <div className="container flex justify-center">
            {stream_token ? (
              <div className="h-[800px] w-full flex flex-col justify-center bg-black">
                <div className="w-full flex justify-end px-6 py-5">
                  <div className="flex items-center gap-2 px-3 py-4 border-[1px] border-[#272A31] rounded-lg">
                    {stream_token ? <CircleLive /> : <Circle />}

                    <p className="font-Poppins font-medium text-2xl  leading-5 text-white">
                      LIVE
                    </p>
                  </div>
                </div>
                <div className="relative w-full h-[582px] flex justify-end items-center bg-black ">
                  <LivestreamPlayer
                    showLiveBadge={true}
                    showDuration={true}
                    showParticipantCount={true}
                    callType="livestream"
                    callId={stream_callID}
                  />
                  <div
                    className={`absolute right-3 ${setChat ? "" : "hidden"}`}
                  >
                    <ChatUser />
                  </div>
                </div>

                <div className="w-full flex justify-end  px-6 py-5">
                  <button
                    className={`px-3 py-4 border-[1px] border-[#272A31] rounded-lg ${
                      setChat ? "bg-[#2E3038]" : "bg-transparent"
                    }`}
                    onClick={() => seeSetChat(!setChat)}
                  >
                    <ChatIcon />
                  </button>
                </div>
              </div>
            ) : (
              <h1 className="font-Poppins font-bold text-lg">
                Ожидание потока...
              </h1>
            )}
          </div>
        </div>
      </div>
    </StreamVideo>
  );
}
