import ChatSearch from "./ChatSearch";
import ChatList from "./ChatList";

const ChatsSection = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col bg-slate-950">
      <div className="w-full p-3">
        <ChatSearch />
      </div>
      <ChatList />
    </div>
  );
};

export default ChatsSection;
