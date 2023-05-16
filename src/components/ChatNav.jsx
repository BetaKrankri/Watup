import { ProfileMenu, ChatsSection } from "../components";

const ChatNav = () => {
  return (
    <div className="w-full h-full flex flex-col  bg-black">
      <ProfileMenu />
      <ChatsSection />
    </div>
  );
};

export default ChatNav;
