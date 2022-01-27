import React from 'react';

import { render } from '@testing-library/react';

import ButtonsForCheckPage from './ButtonsForCheckPage';

test('ButtonsForCheckPage', () => {
  const { getByText } = render(<ButtonsForCheckPage />);

  getByText('ButtonsForCheckPage');
});
