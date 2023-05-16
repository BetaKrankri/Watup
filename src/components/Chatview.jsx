import { ChatBar, MessageInput } from "./index";

const ChatView = ({ conversationId }) => {

  return conversationId ? (
    <div className="w-full h-full bg-slate-900 flex flex-col">
      <ChatBar />

      <div className="bg-slate-950 flex-1 py-2 px-6 md:px-10 flex flex-col justify-end gap-2">
        <div className="SendedMessage  bg-slate-500 rounded-md p-1 flex justify-end gap-1 items-end self-end">
          <p className="text-md">Envie este mensaje!</p>
          <span className=" font-light text-sm">00:00</span>
        </div>
        <div className="ReceivedMessage  bg-slate-800 rounded-md p-1 flex justify-end gap-1 items-end self-start">
          <p className="text-md">PEro Recibiste Este</p>
          <span className=" font-light text-sm">00:00</span>
        </div>
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
