import React from 'react';

import { render } from '@testing-library/react';

import RealtimeList from './RealtimeListPage';

test('RealtimeList', () => {
  const { getByText } = render(<RealtimeList />);

  getByText('RealtimeList');
});
