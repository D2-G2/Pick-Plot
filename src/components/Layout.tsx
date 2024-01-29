import LoginButton from './LoginButton';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

export default function Layout() {
  return (
    <>
      <div className=" bg-gray-100 rounded-lg text-sm">
        <div className="flex">
          <Navbar />
          <SearchBar />
          <LoginButton />
        </div>
      </div>
    </>
  );
}
