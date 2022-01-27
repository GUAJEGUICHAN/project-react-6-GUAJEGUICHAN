import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuPage() {
  return (
    <div>
      <h2>MenuPage</h2>
      <ul>
        <li><Link to="/checkbuttons">ButtonsForCheckPage</Link></li>
        <li><Link to="/realtimelist">RealtimeList</Link></li>
        <li><Link to="/search">SearchPage</Link></li>
        <li><Link to="/addstudent">AddStudentPage</Link></li>
      </ul>
    </div>
  );
}
