import Avatar from "./Avatar";
import Submenu from "./Submenu";
import ChatsSection from "./ChatsSection";

const ChatNav = () => {
  return (
    <div className="w-full h-full flex flex-col  bg-black">
      {/* ProfileMenu */}
      <div className="w-full px-4 py-3 flex justify-between items-center bg-slate-800">
        <Avatar width={50} />
        <Submenu />
      </div>

      <ChatsSection />
      
    </div>
  );
};

export default ChatNav;
