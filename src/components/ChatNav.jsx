import { ProfileBar, ChatsList } from "../components";

const ChatNav = () => {
  return (
    <div className="w-full h-full flex flex-col md:max-w-[400px] bg-black">
      <ProfileBar />
      <ChatsList />
    </div>
  );
};

export default ChatNav;
