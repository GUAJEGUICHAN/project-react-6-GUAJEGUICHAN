import React from 'react';

import { render } from '@testing-library/react';

import App from './App';

test('App', () => {
  const { container, getByText } = render(<App />);
  expect(container).toHaveTextContent('App');
  expect(getByText('App Component')).not.toBeNull();
});
