import React from 'react';

import { render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import { useSelector } from 'react-redux';
import HomePage from './HomePage';

jest.mock('react-redux');

test('HomePage', () => {
  useSelector.mockImplementation((selector) => selector({
    date: '220205',
  }));

  const { container } = render(
    <MemoryRouter initialEntries={['/']}>
      <HomePage />
    </MemoryRouter>,
  );

  expect(container).toHaveTextContent('HomePage');
});
