import React from 'react';

import { render } from '@testing-library/react';

import AddStudentPage from './AddStudentPage';

test('AddStudentPage', () => {
  const { getByText } = render(<AddStudentPage />);

  getByText('AddStudentPage');
});
