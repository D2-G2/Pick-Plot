import { useNavigate } from 'react-router';

export default function LoginButton() {
  const navigate = useNavigate();

  return (
    <div className="flex items-center ml-5 mr-5">
      <button
        onClick={() => navigate('/login')}
        className="flex rounded-lg bg-blue-500 text-xs text-white hover:bg-blue-700 p-2"
      >
        로그인/회원가입
      </button>
    </div>
  );
}
