interface LoginPageButtonProps {
  name: string;
  onClick: () => void;
}

export default function LoginPageButton({ name, onClick }: LoginPageButtonProps) {
  return (
    <span className="flex items-center mx-2">
      <button onClick={onClick} className="flex rounded-lg bg-blue-500 text-xs text-white hover:bg-blue-700 p-2">
        {name}
      </button>
    </span>
  );
}
