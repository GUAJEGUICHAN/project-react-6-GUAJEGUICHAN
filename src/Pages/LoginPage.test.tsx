import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { BrowserRouter, useNavigate } from 'react-router-dom';
import LoginPage from './LoginPage';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    useNavigate: jest.fn(),
  };
});

describe('LoginPage', () => {
  const naviagte = jest.fn();

  (useNavigate as jest.Mock).mockImplementation(() => naviagte);

  it('renders LoginPage', () => {
    const { getByText } = render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>,
    );

    expect(getByText('LoginPage')).not.toBeNull();

    fireEvent.click(getByText('로그인'));
    expect(naviagte).toBeCalled();
  });
});
