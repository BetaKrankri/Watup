import { getTimeString } from "../utils";
import { useState } from "react";
import { ChatBar, MessageInput } from "./index";
import { useDispatch, useSelector } from "react-redux";
import { sendedMessage } from "../store/slices/conversationsSlice";

const ChatView = ({ conversationId, onBack }) => {
  const dispatch = useDispatch();
  const userPhone = useSelector((state) => state.user.phoneNumber);
  const conversation = useSelector((state) =>
    state.conversations.find((conver) => conver.id === conversationId)
  );

  const [newMessage, setNewMessage] = useState("");

  return conversation ? (
    <div className="w-full h-full bg-slate-900 flex flex-col">
      <ChatBar conversation={conversation} onBack={onBack} />

      <div className="bg-slate-950 flex-1 py-2 px-3 md:px-4 flex flex-col-reverse gap-2">
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
              {getTimeString(mess.timeStamp)}
            </span>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 w-full px-3 md:px-4 py-2 flex justify-center">
        <MessageInput
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onSend={() => {
            dispatch(
              sendedMessage({
                text: newMessage,
                converId: conversationId,
                senderPhone: userPhone,
              })
            );
            setNewMessage("");
          }}
        />
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
