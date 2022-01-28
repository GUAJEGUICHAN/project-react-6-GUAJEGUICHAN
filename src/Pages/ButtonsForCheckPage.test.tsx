import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { BrowserRouter, useNavigate } from 'react-router-dom';

import ButtonsForCheckPage from './ButtonsForCheckPage';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

test('ButtonsForCheckPage', () => {
  const navigate = jest.fn();

  (useNavigate as jest.Mock).mockImplementation(() => navigate);

  const { getByText } = render(
    <BrowserRouter>
      <ButtonsForCheckPage />
    </BrowserRouter>,
  );

  getByText('ButtonsForCheckPage');

  fireEvent.click(getByText('1'));

  expect(navigate).toBeCalled();
});
