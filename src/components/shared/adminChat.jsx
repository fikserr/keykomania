import { useDispatch, useSelector } from "react-redux";
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageInput,
  Thread,
  useCreateChatClient,
} from "stream-chat-react";
import { useEffect, useState } from "react";
import { getDataUser } from "../../store/userToken";
import { STREAM_API_KEY } from "../../config/appwriteConfig";

const apiKey = STREAM_API_KEY; // Stream API Key
const userId = "fikserr"; // Admin User ID

const filters = { members: { $in: [userId] }, type: "livestream" };
const options = { presence: true, state: true };
const sort = { last_message_at: -1 };

const AdminChat = () => {
  const { tokenApiUser } = useSelector((state) => state.tokenUser); 
  const dispatch = useDispatch();
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!tokenApiUser) {
      dispatch(getDataUser(userId));
    }
  }, [dispatch, tokenApiUser]);

  const client = useCreateChatClient({
    apiKey,
    tokenOrProvider: tokenApiUser,
    userData: { id: userId, name: "Admin Fikserr" },
  });

  useEffect(() => {
    const loadChannel = async () => {
      if (client && tokenApiUser) {
        try {
          const existingChannel = client.channel("livestream", "admin-channel", {
            name: `Chat with Admin`, // Dynamic channel name
            members: ["fikserr"], // Only admin as a member
          });
          await existingChannel.watch();
          setChannel(existingChannel);
          setLoading(false);
        } catch (error) {
          console.error("Error loading channel:", error);
        }
      }
    };

    loadChannel();
  }, [client, tokenApiUser]);

  if (loading || !client || !channel) {
    return <div>Loading Chat...</div>; // Loading state
  }

  return (
    <Chat client={client}>
      <ChannelList sort={sort} filters={filters} options={options} />
      <Channel channel={channel} title={`Admin Chat - ${channel.data.name}`}>
        <Window>
          <ChannelHeader />
          <MessageInput /> {/* Enable message input for admin */}
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default AdminChat;




