import { SendIcon } from "../assets/icons";

const MessageInput = ({ value, onChange }) => {
  return (
    <div className="w-full py-2 px-4 rounded-lg max-h-[120px] flex gap-2 bg-slate-400 focus-within:ring-2 focus-within:ring-slate-500">
      <input
        type="text"
        placeholder="Escribe un mensaje aqui..."
        className="flex-1 bg-transparent appearance-none border-none outline-none text-slate-950 "
        value={value}
        onChange={onChange}
      />
      <SendIcon className="h-7 w-7 fill-slate-900" />
    </div>
  );
};

export default MessageInput;
