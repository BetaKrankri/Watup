import { ChatItem } from "./index";
import { useSelector } from "react-redux";

const ResultsList = ({ searchTerm, setConversationId }) => {
  const conversations = useSelector((state) => state.conversations);
  const contacts = useSelector((state) => state.contacts);
  const searchResultsObj = {
    CHAT: conversations.filter(
      ({ participants, messages }) =>
        messages.length > 0 &&
        participants.some(
          (p) =>
            p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.phoneNumber.includes(searchTerm)
        )
    ),
    CONTACTS: contacts
      // filtra los contactos que coninciden con sel termino de busqueda
      .filter((contact) =>
        contact.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .map((fContact) => {
        const contactConver = conversations.find((conversation) =>
          conversation.participants.some(
            (p) => p.phoneNumber === fContact.phoneNumber
          )
        );
        if (contactConver) {
          if (contactConver.messages?.length < 1) {
            return contactConver;
          }
        } else {
          throw new Error(`${fContact.name} no tiene una conversacion creada`);
        }
        return null;
      })
      .filter((i) => i),
  };

  //console.log(searchResultsObj);

  return Object.keys(searchResultsObj).map((resultsBy) =>
    searchResultsObj[resultsBy].length > 0 ? (
      <div className="w-full py-1 flex flex-col " key={resultsBy}>
        <p className="pl-6 text-xl">{resultsBy}</p>
        {searchResultsObj[resultsBy].map((result) => {
          return result ? (
            <ChatItem
              key={result.id}
              onClick={() => setConversationId(result.id)}
              chatAvatar={result.chatAvatar}
              chatTitle={result.chatTitle}
              message={result.messages?.length > 0 ? result.messages[0] : null}
            />
          ) : null;
        })}
      </div>
    ) : null
  );

  //
};

export default ResultsList;
