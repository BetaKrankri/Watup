import { ProfileBar, ChatsList } from "../components";

const ChatNav = ({setSelectedConvId}) => {
  return (
    <div className="w-full h-full flex flex-col  bg-black">
      <ProfileBar />
      <ChatsList setSelectedConvId={setSelectedConvId}/>
    </div>
  );
};

export default ChatNav;
