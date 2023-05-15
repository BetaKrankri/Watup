import ChatSearch from "./ChatSearch";
import ChatItem from "./ChatItem.jsx";
import { useState } from "react";

const ChatsSection = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
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
        <ChatItem />
        <ChatItem />
        <ChatItem />
      </div>
    </div>
  );
};

export default ChatsSection;
