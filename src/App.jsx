import { useState } from "react";
import { ChatNav, ChatView } from "./components";

function App() {
  const [currentConversationId, setCurrentConversationId] = useState({});

  return (
    <div className="WasupApp w-full h-screen flex">
      <ChatNav />
      <ChatView conversationId={currentConversationId} />
    </div>
  );
}

export default App;
