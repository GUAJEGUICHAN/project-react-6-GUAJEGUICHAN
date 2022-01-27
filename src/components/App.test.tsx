import React from 'react';

import { render } from '@testing-library/react';

import context from 'jest-plugin-context';

import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import App from './App';

import SearchPage from '../Pages/SearchPage';
import RealtimeList from '../Pages/RealtimeListPage';
import ButtonsForCheckPage from '../Pages/ButtonsForCheckPage';
import MenuPage from '../Pages/MenuPage';
import LoginPage from '../Pages/LoginPage';

describe('App', () => {
  it('renders App', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(getByText('App Component')).not.toBeNull();
  });

  context('with path /', () => {
    it('renders LoginPage', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/']}>
          <LoginPage />
        </MemoryRouter>,
      );

      expect(getByText('LoginPage')).not.toBeNull();
    });
  });

  context('with path /menu', () => {
    it('renders MenuPage', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/menu']}>
          <MenuPage />
        </MemoryRouter>,
      );

      expect(getByText('MenuPage')).not.toBeNull();
    });
  });

  context('with path /checkbuttons', () => {
    it('renders MenuPage', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/checkbuttons']}>
          <ButtonsForCheckPage />
        </MemoryRouter>,
      );

      expect(getByText('ButtonsForCheckPage')).not.toBeNull();
    });
  });

  context('with path /realtimelist', () => {
    it('renders RealtimeList', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/realtimelist']}>
          <RealtimeList />
        </MemoryRouter>,
      );

      expect(getByText('RealtimeList')).not.toBeNull();
    });
  });

  context('with path /search', () => {
    it('renders SearchPage', () => {
      const { getByText } = render(
        <MemoryRouter initialEntries={['/search']}>
          <SearchPage />
        </MemoryRouter>,
      );

      expect(getByText('SearchPage')).not.toBeNull();
    });
  });
});
