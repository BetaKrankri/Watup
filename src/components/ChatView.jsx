import { useSelector } from "react-redux";
import { ChatBar, MessageInput } from "./index";
import { getHourString } from "../utils";

const ChatView = ({ conversationId, setConversationId }) => {
  const userPhone = useSelector((state) => state.user.phoneNumber);
  const conversation = useSelector((state) =>
    state.conversations.find((conver) => conver.id === conversationId)
  );

  return conversation ? (
    <div className="w-full h-full bg-slate-900 flex flex-col">
      <ChatBar conversation={conversation} onBack={() => setConversationId(null)}/>

      <div className="bg-slate-950 flex-1 py-2 px-6 md:px-10 flex flex-col justify-end gap-2">
        {conversation.messages.map((mess) => (
          <div
            key={mess.timeStamp}
            className={`rounded-md p-1 flex justify-end gap-1 items-end ${
              userPhone === mess.senderPhone
                ? "self-end bg-slate-500"
                : "self-start bg-slate-800"
            }`}
          >
            <p className="text-md">{mess.text}</p>
            <span className=" font-light text-sm">
              {getHourString(mess.timeStamp)}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 w-full px-6 py-2 flex justify-center">
        <MessageInput />
      </div>
    </div>
  ) : (
    <EmptyConversationView />
  );
};

function EmptyConversationView() {
  return (
    <div className="h-full w-full bg-slate-900 flex justify-center items-center">
      Elige una conversacion
    </div>
  );
}

export default ChatView;
