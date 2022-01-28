import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type ClassProps = {
  [num: number]: number[],
}

export default function ClassPage() {
  const navigate = useNavigate();

  const param = useParams();

  const classes: ClassProps = {
    1: [1, 2, 3, 4, 5, 6, 7],
    2: [1, 2, 3, 4, 5],
    3: [1, 2, 3, 4],
  };

  function handleClick({ currentTarget }: React.MouseEvent<HTMLElement>) {
    const value: string = currentTarget.textContent;

    navigate(`${value}`);
  }

  return (
    <div>
      <h2>ClassPage</h2>
      {classes[Number(param.grade)].map((c: number) => (
        <li key={c}><button type="button" onClick={handleClick}>{c}</button></li>
      ))}
    </div>
  );
}
