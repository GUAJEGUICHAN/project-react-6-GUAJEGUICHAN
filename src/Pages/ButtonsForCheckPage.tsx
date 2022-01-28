import React from 'react';

import { useNavigate } from 'react-router-dom';

export default function ButtonsForCheckPage() {
  const navigate = useNavigate();
  // async function fetchMembers() {
  //   const response = await fetch('http://localhost:5000/members/');
  //   const data = await response.json();
  //   console.log(data);
  // }

  function handleClick({ currentTarget }: React.MouseEvent<HTMLElement>) {
    const value: string = currentTarget.textContent;

    navigate(`${value}`);
  }

  const grades = [1, 2, 3];

  // useEffect(() => {
  //   fetchMembers();
  // }, []);

  return (
    <div>
      ButtonsForCheckPage
      <ul>
        {grades.map((grade) => (
          <li key={grade}>
            <button
              type="button"
              value={grade}
              onClick={handleClick}
            >
              {grade}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
