import LoginButton from './LoginButton';
import Navbar from './Navbar';
import SearchBar from './SearchBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className=" bg-gray-100 rounded-lg text-sm border-b-slate-100 border-b-2">
        <div className="flex mx-28">
          <Navbar />
          <SearchBar />
          <LoginButton />
        </div>
      </div>
      <div className="mx-24">{children}</div>
    </>
  );
}
