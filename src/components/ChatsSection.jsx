import ChatSearch from "./ChatSearch";
import ChatItem from "./ChatItem.jsx";

const ChatsSection = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col bg-slate-950">
      {/* Top Search Bar */}
      <div className="w-full p-3">
        <ChatSearch value={""} onClick={() => {}} />
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
