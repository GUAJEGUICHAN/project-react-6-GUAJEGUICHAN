import React from 'react';

import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import MenuPage from './MenuPage';

test('MenuPage', () => {
  const { getByText } = render(
    <BrowserRouter>
      <MenuPage />
    </BrowserRouter>,
  );

  getByText('MenuPage');
});
