import { SearchIcon } from "../assets/icons";

const SearchInput = ({ value, onChange }) => {
  return (
    <div className="SearchInput w-full min-h-[40px] flex items-center px-3 gap-3 overflow-hidden rounded-lg bg-slate-400 focus-within:ring-2 focus-within:ring-slate-500">
      <SearchIcon className="w-7 h-7" />
      <input
        type="text"
        placeholder="Look for Contacts or Chats"
        className="flex-1 bg-transparent appearance-none border-none outline-none text-slate-950 placeholder:text-gray-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
