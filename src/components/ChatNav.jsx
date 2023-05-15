import ProfileMenu from "./ProfileMenu";
import Avatar from "./Avatar.jsx";
import Submenu from './Submenu.jsx';

const ChatNav = () => {
  return (
    <div className="w-full h-full flex flex-col  bg-black">
      <ProfileMenu>
        <Avatar width={50}/>
        <Submenu />
      </ProfileMenu>
      ChatsSection
    </div>
  );
};

export default ChatNav;
