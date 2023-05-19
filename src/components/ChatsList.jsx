import { useSelector } from "react-redux";
import { ChatItem } from "./index";

const ChatsList = ({ setConversationId }) => {
  const conversations = useSelector(({ conversations }) => conversations);

  return (
    <>
      {conversations.map((conver) => {
        if (conver.messages.length > 0) {
          return (
            <ChatItem
              key={conver.id}
              onClick={() => setConversationId(conver.id)}
              chatAvatar={conver.chatAvatar}
              chatTitle={conver.chatTitle}
              message={conver.messages[0]}
              previewInfo={conver}
            />
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default ChatsList;
