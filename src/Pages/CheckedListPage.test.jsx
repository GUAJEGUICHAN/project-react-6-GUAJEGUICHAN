import React from 'react';

import { render } from '@testing-library/react';

import CheckedListPage from './CheckedListPage';

test('CheckedListPage', () => {
  const { container } = render(<CheckedListPage />);

  expect(container).toHaveTextContent('CheckedListPage');
});
