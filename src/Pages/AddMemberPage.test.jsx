import React from 'react';

import { render } from '@testing-library/react';

import AddMemberPage from './AddMemberPage';

test('AddMemberPage', () => {
  const { container } = render(<AddMemberPage />);

  expect(container).toHaveTextContent('AddMemberPage');
});
