import { getHourString } from "../utils";
import Avatar from "./Avatar";

const ChatItem = ({ previewInfo, onClick }) => {
  const { lastMessage, id, chatAvatar, chatTitle } = previewInfo;
  return (
    <div
      className="w-full p-3 flex gap-3 border-b-2 border-slate-300 hover:cursor-pointer hover:bg-slate-900"
      onClick={onClick}
    >
      <Avatar width={60} src={chatAvatar} />
      <div className="ChatPreview flex-1 flex flex-col py-1">
        <h1 className="text-lg font-medium ">{chatTitle}</h1>
        <p className="">{lastMessage.text}</p>
      </div>
      <div className="flex flex-col items-end justify-between py-1 text-sm">
        <p>{getHourString(lastMessage.timeStamp)}</p>

        {/* Indicador de mensajes no leidos */}
        {/* <div className="bg-slate-700 rounded-full h-5 w-5 grid place-items-center ">
          <span>1</span>
        </div> */}
      </div>
    </div>
  );
};

export default ChatItem;
