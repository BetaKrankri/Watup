import { SearchIcon } from "../assets/icons";

const ChatSearch = ({value, onChange}) => {
  return (
    <div className="SearchInput w-full min-h-[40px] flex items-center px-3 gap-3 overflow-hidden rounded-2xl bg-slate-300 focus-within:ring-2 focus-within:ring-slate-500 focus-within:border-slate-500">
      <SearchIcon className="search-icon w-7 h-7" />
      <input
        type="text"
        placeholder="Buqueda de Chat"
        className="flex-1 bg-transparent appearance-none border-none outline-none text-slate-950"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default ChatSearch;