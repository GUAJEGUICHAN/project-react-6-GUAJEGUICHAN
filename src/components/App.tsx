import React from 'react';

import { Routes, Route } from 'react-router-dom';

import AddStudentPage from '../Pages/AddStudentPage';
import ButtonsForCheckPage from '../Pages/ButtonsForCheckPage';
import ClassPage from '../Pages/ClassPage';
import LoginPage from '../Pages/LoginPage';
import MenuPage from '../Pages/MenuPage';
import RealtimeList from '../Pages/RealtimeListPage';
import SearchPage from '../Pages/SearchPage';
import StudentsListPage from '../Pages/StudentsListPage';

export default function App() {
  return (
    <div>
      <h2>App Component</h2>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/checkbuttons" element={<ButtonsForCheckPage />} />
        <Route path="/realtimelist" element={<RealtimeList />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/addstudent" element={<AddStudentPage />} />
        <Route path="/checkbuttons/:grade/*" element={<ClassPage />} />
        <Route path="/checkbuttons/:grade/:class" element={<StudentsListPage />} />
      </Routes>
    </div>
  );
}
