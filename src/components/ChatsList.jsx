import { ChatItem, ChatSearch } from "./index";
import { useState } from "react";
import { useSelector } from "react-redux";

const ChatsList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const chatsPreviewList = useSelector((state) =>
    state.conversations.map((conv) => ({
      id: conv.id,
      chatTitle: conv.chatTitle,
      lastMessage: conv.messages[0],
      chatAvatar: conv.chatAvatar
    }))
  );
    console.log(chatsPreviewList)
  return (
    <div className="w-full h-full flex flex-col bg-slate-950">
      {/* Top Search Bar */}
      <div className="w-full p-3">
        <ChatSearch
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* Bottom Chat List  */}
      <div className="ChatList h-full w-full bg-slate-950">
        {chatsPreviewList.map((previewItem) => (
          <ChatItem previewInfo={previewItem} key={previewItem.id}/>
        ))}
      </div>
    </div>
  );
};

export default ChatsList;
