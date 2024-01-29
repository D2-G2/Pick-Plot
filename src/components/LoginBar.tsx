import { useState } from 'react';
import LoginPageButton from './LoginPageButton';

export default function LoginBar() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onClickLogin = () => {
    alert('로그인 되었습니다.');
    setId('');
    setPassword('');
  };

  const onClickJoin = () => {
    alert('회원가입 되었습니다.');
    setId('');
    setPassword('');
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <form>
          <label>아이디</label>
          <br />
          <input
            type="text"
            value={id}
            onChange={onChangeId}
            className=" rounded-lg border-2 border-blue-200 bg-white h-7 w-60 px-2 mb-5 text-xs  focus: outline-blue-500"
          />
          <br />
          <label>비밀번호</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={onChangePassword}
            className=" rounded-lg border-2 border-blue-200 bg-white h-7 w-60 px-2 mb-5 text-xs  focus:outline-blue-500"
          />
          <br />
        </form>
      </div>
      <div className="flex justify-center">
        <LoginPageButton name={'로그인'} onClick={onClickLogin} />
        <LoginPageButton name={'회원가입'} onClick={onClickJoin} />
      </div>
    </>
  );
}
