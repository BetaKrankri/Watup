import { useState } from "react";
import { ChatNav, ChatView } from "./components";

function App() {
  const [conversationId, setConversationId] = useState(null);

  return (
    <div className="WasupApp w-full h-screen flex">
      <div
        className={`w-full md:max-w-[350px] lg:max-w-[400px] ${
          conversationId ? "hidden" : "block"
        } md:block`}
      >
        <ChatNav setConversationId={setConversationId} />
      </div>
      <div
        className={`Chatview w-full ${
          conversationId ? "block" : "hidden"
        } md:block`}
      >
        <ChatView
          conversationId={conversationId}
          onBack={() => setConversationId(null)}
        />
      </div>
    </div>
  );
}

export default App;
