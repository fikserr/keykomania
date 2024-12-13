import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StreamChat } from "stream-chat";
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageInput,
  Thread,
} from "stream-chat-react";
import { getDataUser } from "../../store/userToken";
import { STREAM_API_KEY } from "../../config/appwriteConfig";

const apiKey = STREAM_API_KEY; // Stream API key

const filters = { type: "livestream" }; // Channel filter
const sort = { last_message_at: -1 }; // Sorting channels
const options = { presence: true, state: true }; // Additional options
const name = (() => {
  try {
    return JSON.parse(localStorage.getItem("nameData")) || "";
  } catch (error) {
    console.error("localStorage parsing error:", error);
    return "";
  }
})();

const Root = () => {
  const [client, setClient] = useState(null);
  const [channel, setChannel] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  // Retrieve token from Redux state
  const { tokenApiUser } = useSelector((state) => state.tokenUser);

  useEffect(() => {
    const initializeChat = async () => {
      // Token not available, dispatch action to get the token and return
      dispatch(getDataUser(name.pass));

      try {
        // Initialize the StreamChat client
        const chatClient = new StreamChat(apiKey);

        // Create new user object
        const newUser = {
          id: name.pass,
          name: "kleesli",
          image: "https://link.to/avatar.png", // User image
        };
        console.log(tokenApiUser, newUser);
        // Upsert user (create or update)

        // await chatClient.upsertUsers([newUser]);
        // Connect the user using the token from Redux
        await chatClient.connectUser(newUser, tokenApiUser);

        setClient(chatClient);

        // Create a new channel for the user
        const newChannel = chatClient.channel(
          "livestream",
          `channel-${name.pass}`,
          {
            name: `Channel-${name.pass}`,
            members: [name.pass],
          }
        );

        // Watch the channel
        await newChannel.watch();
        setChannel(newChannel);
        setLoading(false);
      } catch (error) {
        console.error("Error initializing chat client:", error);
      }
    };

    // If the token is not available, we wait for it
    if (tokenApiUser) {
      initializeChat();
    }

    // Cleanup when component unmounts
    // return () => {
    //   if (client) {
    //     client.disconnectUser();
    //   }
    // };
  }, [dispatch, tokenApiUser, name.pass]);

  if (loading || !client || !channel) {
    return <div>Loading Chat...</div>;
  }

  return (
    <Chat client={client}>
      <ChannelList filters={filters} sort={sort} options={options} />
      <Channel channel={channel}>
        <Window>
          <ChannelHeader />
          <MessageInput />
        </Window>
        <Thread />
      </Channel>
    </Chat>
  );
};

export default Root;
