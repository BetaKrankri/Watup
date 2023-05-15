import Avatar from "./Avatar";

const ChatItem = () => {
  return (
    <div className="w-full p-3 flex gap-3 border-b-2 border-slate-300">
      <Avatar width={60} />
      <div className="ChatPreview flex-1 flex flex-col py-1">
        <h1 className="text-lg font-medium ">Contact Name</h1>
        <p className="">
          The last message from this conversation...
        </p>
      </div>
      <div className="flex flex-col items-end justify-between py-1 text-sm">
        <p>00:00</p>
        <div className="bg-slate-700 rounded-full h-5 w-5 grid place-items-center ">
            <span>1</span>
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
