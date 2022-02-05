import React from 'react';

import { Route, Routes } from 'react-router-dom';

import CheckPage from '../Pages/CheckPage';
import HomePage from '../Pages/HomePage';
import ClassContainer from './Check/ClassContainer';
import GradeContainer from './Check/GradeContainer';
import StudentsContainer from './Check/StudentsContainer';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/check" element={<CheckPage />}>
        <Route path="" element={<GradeContainer />} />
        <Route path=":gradeNumber" element={<ClassContainer />} />
        <Route path=":gradeNumber/:classNumber" element={<StudentsContainer />} />
      </Route>
    </Routes>
  );
}
