import { useSelector } from "react-redux";
import { Avatar, Submenu } from ".";

const ProfileBar = () => {
  const userAvatar = useSelector((state) => state.user.avatarSrc);

  return (
    <div className="w-full px-4 py-3 flex justify-between items-center bg-slate-800">
      <Avatar width={50} src={userAvatar} />
      <Submenu />
    </div>
  );
};

export default ProfileBar;
