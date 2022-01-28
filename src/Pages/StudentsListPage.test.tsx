import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { useParams } from 'react-router-dom';

import StudentsListPage from './StudentsListPage';

jest.mock('react-router-dom');

describe('StudentsListPage', () => {
  context('when you`ve got a wrong grade and class', () => {
    it("don't renders any buttons", () => {
      (useParams as jest.Mock).mockImplementation(() => ({ grade: 2, class: 2 }));

      const { getByText, queryByRole } = render(<StudentsListPage />);

      getByText('StudentsListPage');

      expect(queryByRole('button', { name: '이승만' })).toBeNull();
    });
  });

  context('when you`ve got a right grade and class', () => {
    it("renders buttons with members' names ", () => {
      (useParams as jest.Mock).mockImplementation(() => ({ grade: 1, class: 1 }));

      const { getByText, getByRole } = render(<StudentsListPage />);

      getByText('StudentsListPage');

      getByRole('button', { name: '이승만' });
    });
  });

  context('when a member doesn`t have today`s date', () => {
    it('add (V) on the button', () => {
      (useParams as jest.Mock).mockImplementation(() => ({ grade: 1, class: 1 }));

      const { getByRole } = render(<StudentsListPage />);

      fireEvent.click(getByRole('button', { name: '이승만' }));

      expect(getByRole('button', { name: '이승만(V)' })).not.toBeNull();
    });
  });

  context('when a member has today`s date', () => {
    it('remove (v) on the button', () => {
      (useParams as jest.Mock).mockImplementation(() => ({ grade: 1, class: 1 }));

      const { getByRole } = render(<StudentsListPage />);

      fireEvent.click(getByRole('button', { name: '최규하(V)' }));

      expect(getByRole('button', { name: '최규하' })).not.toBeNull();
    });
  });
});
