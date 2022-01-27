import React from 'react';

import { render } from '@testing-library/react';

import SearchPage from './SearchPage';

test('SearchPage', () => {
  const { getByText } = render(<SearchPage />);

  getByText('SearchPage');
});
