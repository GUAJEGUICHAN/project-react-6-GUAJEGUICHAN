import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const naviagte = useNavigate();

  async function handleClick() {
    // const response = await fetch('http://localhost:5000/login/');
    // const data = await response.json();
    // console.log(data);

    naviagte('/menu');
  }

  return (
    <>
      <h2>LoginPage</h2>
      <div>
        <input type="text" name="username" id="username" />
        <input type="password" name="password" id="password" />
        <button type="button" onClick={handleClick}>로그인</button>
      </div>
    </>
  );
}
