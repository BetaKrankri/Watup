const Avatar = ({ width = 100, src }) => {
  return (
    <div
      className={"rounded-full grid place-items-center bg-slate-300 "}
      style={{ width: width, height: width }}
    >
      {src && (
        <img
          src={src}
          alt="avatar"
          className="w-full h-full object-contain rounded-md"
        />
      )}
    </div>
  );
};

export default Avatar;
