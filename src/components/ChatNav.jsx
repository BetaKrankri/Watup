import { ProfileBar, ChatSearch, ChatItem } from "../components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectChatsPreviewList } from "../store/slices/conversationsSlice";

const ChatNav = ({ setConversationId }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const chatsPreviewList = useSelector(selectChatsPreviewList);

  return (
    <div className="w-full h-full flex flex-col  bg-black">
      <ProfileBar />

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
            <ChatItem
              previewInfo={previewItem}
              key={previewItem.id}
              onClick={() => setConversationId(previewItem.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatNav;
