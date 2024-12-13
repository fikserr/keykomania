import {
  ParticipantView,
  StreamCall,
  StreamVideo,
  StreamVideoClient,
  useCall,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getData } from "../store/getToken";
import { generateCallId} from "../store/callSlice";
import Camera from "../icons/camera";
import Leave from "../icons/leave";
import Members from "../icons/members";
import Loading from "../components/shared/loading";
import CircleLive from "../icons/circleLive";
import Circle from "../icons/circle";
import MicUnMute from "../icons/micUnMute";
import AdminChat from "../components/shared/adminChat";
import ChatIcon from "../icons/chatIcon";
import { createTokenCallId } from "../store/createTokenAppWrite";
import { deleteDocumentById,} from "../store/deleteAppwriteToken";
import { getTokenCallID } from "../store/getTokenAppWrite";
import { STREAM_API_KEY } from "../config/appwriteConfig";

export default function AdminStream() {
  const dispatch = useDispatch();
  const { tokenApi} = useSelector((state) => state.token);
  const { callID } = useSelector((state) => state.call);

  const apiKey = STREAM_API_KEY;
  const userId = "fikserr";
  const user = {
    id: userId,
    name: "Abdulloh",
  };

  const clientRef = useRef(null);
  const [callInstance, setCallInstance] = useState(null);

  // Token va CallIDni olish
  useEffect(() => {
    dispatch(getData("https://keykomania-server.onrender.com/api")); 
    dispatch(generateCallId());
  }, [dispatch]);

  // StreamVideoClientni yaratish
  useEffect(() => {
    if (tokenApi && !clientRef.current) {
      clientRef.current = new StreamVideoClient({
        apiKey,
        user,
        token: tokenApi,
      });
    }

  }, [tokenApi]);

 
  useEffect(() => {
    if (clientRef.current && callID && tokenApi) {
      const newCall = clientRef.current.call("livestream", callID);
      newCall
        .join({ create: true })
        .then(() => {
          setCallInstance(newCall); // `callInstance` ni o'rnatish
        })
        .catch((err) => {
          console.error("Call join failed:", err);
        });
    }
    console.log(callID, tokenApi);
  }, [callID, tokenApi]);

  // Error handling
  // if (error) {
  //   return <div>Error: {error}</div>;
  // }

  // Token yoki CallID tayyor bo'lishini kutish
  if (!tokenApi || !callID || !callInstance) {
    return (
      <div>
        <Loading />
      </div>
    );
  }

  // Asosiy komponent renderi
  return (
    <StreamVideo client={clientRef.current}>
      <StreamCall call={callInstance}>
        <MyUILayout />
      </StreamCall>
    </StreamVideo>
  );
}

export const MyUILayout = () => {
  const call = useCall();
  const {
    useIsCallLive,
    useCameraState,
    useMicrophoneState,
    useLocalParticipant,
    useParticipantCount,
  } = useCallStateHooks();
  const { microphone: mic, isEnabled: isMicEnabled } = useMicrophoneState();
  const { camera: cam, isEnabled: isCamEnabled } = useCameraState();
  const participantCount = useParticipantCount();
  const localParticipant = useLocalParticipant();
  const isCallLive = useIsCallLive();
  const [seeChat,setSeeChat] = useState(true)
  const { tokenApi} = useSelector((state) => state.token);
  const { dataApp} = useSelector((state) => state.getAppWriteToken);
  const { callID } = useSelector((state) => state.call);
  const dispatch = useDispatch()


  useEffect(()=>{
    dispatch(getTokenCallID())
  },[dataApp])

  function StartStream() {
    if (!isCallLive) {
      dispatch(createTokenCallId({token:tokenApi,callID:callID}))
      dispatch(getTokenCallID())
      call?.goLive()
    }else if (isCallLive) {
      const id = dataApp.map((item)=>item.$id)
      dispatch(deleteDocumentById(id))
      call?.stopLive()
    }
    
  }

  return (
    <div className="container">
      <div className="h-[100vh] md:h-[807px] w-full bg-black flex flex-col items-center justify-center mt-7">
        <div className="w-full flex justify-end px-6 py-5">
          <div className="flex items-center gap-2 px-3 py-4 border-[1px] border-[#272A31] rounded-lg">
            {isCallLive ? <CircleLive /> : <Circle />}

            <p className="font-Poppins font-medium text-2xl  leading-5 text-white">
              LIVE
            </p>
          </div>
        </div>
        <div className="relative h-[615px] w-full flex justify-center items-center">
          <ParticipantView participant={localParticipant} className="w-full" />
          <div className={`absolute right-0 ${seeChat ? "" : "hidden"}`}><AdminChat/></div>
        </div>

        <div className="flex justify-between items-center px-6 py-7 w-full">
          <div className="flex gap-6">
            <button
              onClick={() => mic.toggle()}
              className={`px-3 py-4 border-[1px] border-[#272A31] rounded-lg ${
                isMicEnabled ? "bg-[#2E3038]" : "bg-transparent"
              }`}
            >
              {" "}
              <MicUnMute />{" "}
            </button>
            <button
              onClick={() => cam.toggle()}
              className={`px-3 py-4 border-[1px] border-[#272A31] rounded-lg ${
                isCamEnabled ? "bg-[#2E3038]" : "bg-transparent"
              }`}
            >
              {" "}
              <Camera />{" "}
            </button>
          </div>
          <button
            onClick={()=>StartStream()}
            className={`font-Poppins font-medium text-lg leading-8 px-3 py-4 border-[1px] border-[#272A31] rounded-lg ${
              isCallLive ? "bg-[#C74E5B]" : "bg-[#3cdb57]"
            }`}
          >
            {isCallLive ? <Leave /> : "Начинать"}
          </button>

          <div className="flex gap-6">
            <div className="flex items-center px-3 py-4 border-[1px] border-[#272A31] rounded-lg">
              <Members />
              <p className="font-Poppins font-medium text-lg leading-5 text-white">
                {participantCount}
              </p>
            </div>

            <button
            onClick={() => setSeeChat(!seeChat)}
            className={`px-3 py-4 border-[1px] border-[#272A31] rounded-lg ${
                seeChat ? "bg-[#2E3038]" : "bg-transparent"
              }`}
          >
             <ChatIcon/>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
