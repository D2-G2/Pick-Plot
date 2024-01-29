import { useState } from 'react';

export default function SearchBar() {
  const [search, setSearch] = useState('');

  const onChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onKeyDownSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearch('');
    }
  };

  return (
    <div className="flex items-center ml-auto mr-0 relative">
      <input
        value={search}
        onChange={onChangeSearch}
        onKeyDown={onKeyDownSearch}
        className=" rounded-lg border-2 border-gray-300 bg-white h-7 w-60 px-2 text-xs  focus:outline-none"
        placeholder="오늘은 어떤 영화를 보고 싶으세요?"
      />
    </div>
  );
}
