import { Avatar, Submenu } from "./index";

const ChatBar = ({avatar}) => {
  return (
    <div className="w-full px-4 py-3 flex bg-slate-800 items-center justify-between">
      <div className="flex">
        <Avatar width={50} src={avatar} />
        <div className="Info h-full flex flex-col justify-between pl-4 max-h-[50px]">
          <h1 className=" font-bold text-lg">Chat Title</h1>
          <span className=" font-light">Online Status</span>
        </div>
      </div>

      <Submenu />
    </div>
  );
};

export default ChatBar;
