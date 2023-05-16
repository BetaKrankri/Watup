import { useState } from "react";
import { ChatNav, ChatView } from "./components";

function App() {
  const [currentConversationId, setSelectedConvId] = useState(null);

  return (
    <div className="WasupApp w-full h-screen flex">
      <div
        className={`w-full md:max-w-[350px] lg:max-w-[400px] ${
          currentConversationId ? "hidden" : "block"
        } md:block`}
      >
        <ChatNav setSelectedConvId={setSelectedConvId} />
      </div>
      <div
        className={`w-full hidden ${
          !currentConversationId ? "hidden" : "block"
        } md:block`}
      >
        <ChatView conversationId={currentConversationId} />
      </div>
    </div>
  );
}

export default App;
