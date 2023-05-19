import { ProfileBar, SearchInput, ChatsList, ResultsList } from "../components";
import { useState } from "react";

const ChatNav = ({ setConversationId }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="w-full h-full flex flex-col  bg-black">
      <ProfileBar />

      <div className="w-full h-full flex flex-col bg-slate-950">
        {/* Top Search Bar */}
        <div className="Search w-full p-3">
          <SearchInput
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Bottom Items List  */}
        <div className="List h-full w-full bg-slate-950">
          {/* Si no existe un termino de busqueda solo renderiza la lista de chats con su ultimo  */}
          {!searchTerm && <ChatsList setConversationId={setConversationId} />}
          {searchTerm && (
            <ResultsList
              searchTerm={searchTerm}
              setConversationId={setConversationId}
            />
          )}
        </div>
      </div>
    </div>
  );
};



export default ChatNav;
