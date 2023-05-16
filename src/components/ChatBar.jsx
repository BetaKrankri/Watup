import { BackArrowIcon } from "../assets/icons";
import { Avatar, Submenu } from "./index";

const ChatBar = ({ conversation, onBack }) => {
  return (
    <div className="w-full px-4 py-3 flex bg-slate-800 items-center justify-between">
      <div className="flex gap-4">
      <BackArrowIcon className="w-7 h-7 self-center fill-slate-300 hover:cursor-pointer md:hidden" onClick={onBack} />
        <Avatar width={50} src={conversation.chatAvatar} />
        <div className="Info h-full flex flex-col justify-between max-h-[50px]">
          <h1 className=" font-bold text-lg">{conversation.chatTitle}</h1>
          <span className=" font-light">Online Status</span>
        </div>
      </div>

      <Submenu />
    </div>
  );
};

export default ChatBar;
