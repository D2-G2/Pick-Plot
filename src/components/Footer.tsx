export default function Footer() {
  return (
    <div className="flex justify-between px-36 mt-20 items-center h-20 bg-gray-100 border-t-1 border-b-slate-100 bg-opacity-80 rounded-lg">
      <span className="text-xs text-slate-400">© 2024. Munseok Song.</span>
      <a href="https://github.com/D2-G2" target="_blank" rel="noreferrer" className="">
        <img
          src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png"
          alt="github logo"
          className="w-6 h-6 ml-2"
        />
      </a>
    </div>
  );
}
