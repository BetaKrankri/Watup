import { SendIcon } from "../assets/icons";

const MessageInput = ({ value, onChange, onSend }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSend();
  };

  return (
    <form
      className="w-full py-2 px-4 rounded-lg max-h-[120px] flex gap-2 bg-slate-400 focus-within:ring-2 focus-within:ring-slate-500"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Escribe un mensaje aqui..."
        className="flex-1 bg-transparent appearance-none border-none outline-none text-slate-950 placeholder:text-gray-500"
        value={value}
        onChange={onChange}
      />
      <button type="submit" className="">
        <SendIcon className="h-7 w-7 fill-slate-900" />
      </button>
    </form>
  );
};

export default MessageInput;
