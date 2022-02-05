import React from 'react';

import { render } from '@testing-library/react';

import SerachPage from './SerachPage';

test('SerachPage', () => {
  const { container } = render(<SerachPage />);

  expect(container).toHaveTextContent('SerachPage');
});
