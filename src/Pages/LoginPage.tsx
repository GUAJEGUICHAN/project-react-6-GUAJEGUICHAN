import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const naviagte = useNavigate();

  function handleClick() {
    naviagte('/menu');
  }

  return (
    <>
      <h2>LoginPage</h2>
      <div>
        <input type="text" name="" id="" />
        <input type="password" name="" id="" />
        <button type="button" onClick={handleClick}>로그인</button>
      </div>
    </>
  );
}
