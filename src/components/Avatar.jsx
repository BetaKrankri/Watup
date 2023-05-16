import { randomAvatarSrc } from "../utils";
const Avatar = ({ width = 100, src }) => {
  const avatarSrc = src || randomAvatarSrc()
  return (
    <div
      className={"rounded-full grid place-items-center bg-slate-300 "}
      style={{ width: width, height: width }}
    >
      <img src={avatarSrc} alt="avatar" className="w-full h-full object-contain rounded-md" />
    </div>
  );
};

export default Avatar;
