import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { BrowserRouter, useNavigate } from 'react-router-dom';

import ClassPage from './ClassPage';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
    useParams: jest.fn(() => ({ grade: 1 })),
  };
});

test('ClassPage', () => {
  const navigate = jest.fn();

  (useNavigate as jest.Mock).mockImplementation(() => navigate);

  const { getByText } = render(
    <BrowserRouter>
      <ClassPage />
    </BrowserRouter>,
  );

  getByText('ClassPage');

  fireEvent.click(getByText('1'));

  expect(navigate).toBeCalled();
});
