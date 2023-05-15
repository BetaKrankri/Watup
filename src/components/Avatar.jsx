const defaultAvatar = 'https://api.dicebear.com/6.x/adventurer/svg?seed=Casper'

const Avatar = ({ width = 100, src = defaultAvatar }) => {
  return (
    <div
      className={'rounded-full bg-amber-300 grid place-items-center'}
      style={{ width: width, height: width }}
    >
        <img src={src} alt='avatar' className="w-full h-full object-contain"/>
    </div>
  );
};

export default Avatar;
