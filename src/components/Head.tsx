import logo from '../assets/logo4.png';
import { useNavigate } from 'react-router';

export default function Head() {
  const navigate = useNavigate();
  return (
    <div className="flex align-middle justify-center items-center my-12">
      <img src={logo} className="h-36 hover:cursor-pointer" onClick={() => navigate('/')} />
    </div>
  );
}
