import context from 'jest-plugin-context';

import given from 'given2';

import reducer, {
  setDate,
  initiateChecks,
  checkId,
} from './slice';

describe('slice', () => {
  given('initialState', () => ({
    date: undefined,
    classes: {
      1: [1, 2, 3, 4, 5, 6, 7],
    },
    theNumberOfMembers: undefined,
    members: given.members,
    checkedId: given.checkedId,
  }));

  describe('setDate', () => {
    it('', () => {
      const state = reducer(given.initialState, setDate('220205'));

      expect(state.date).toBe('220205');
    });
  });

  describe('initiateChecks', () => {
    given('members', () => ([{
      id: 1,
      isStudent: true,
      name: '이승만',
      gradeNumber: 1,
      classNumber: 1,
      checkedToady: undefined,
    }]));

    context('checkedId includes the id', () => {
      given('checkedId', () => ([1]));

      it('checkedToday turns true', () => {
        const state = reducer(given.initialState, initiateChecks);

        expect(state.members[0].checkedToady).toBe(true);
      });
    });
    context('checkId doesn`t include the id', () => {
      given('checkedId', () => ([2]));
      it('checkedToday turns false', () => {
        const state = reducer(given.initialState, initiateChecks);

        expect(state.members[0].checkedToady).toBe(false);
      });
    });
  });

  describe('checkId', () => {
    given('checkedMember', () => ({
      id: 1,
      isStudent: true,
      name: '이승만',
      gradeNumber: 1,
      classNumber: 1,
      checkedToady: undefined,
    }));
    given('notCheckedMember', () => ({
      id: 2,
      isStudent: true,
      name: '윤보선',
      gradeNumber: 1,
      classNumber: 1,
      checkedToady: undefined,
    }));
    given('members', () => ([
      given.checkedMember,
      given.notCheckedMember,
    ]));

    given('checkedId', () => ([1]));

    context('the checkedId contains the id', () => {
      it('get rid of the id from the checkedId', () => {
        const state = reducer(given.initialState, checkId(given.checkedMember));

        expect(state.checkedId.includes(given.checkedMember.id)).toBe(false);
      });
    });

    context('the checkedId doesn`t contain the id', () => {
      it('add the id in the checkedId', () => {
        const state = reducer(given.initialState, checkId(given.notCheckedMember));

        expect(state.checkedId.includes(given.notCheckedMember.id)).toBe(true);
      });
    });
  });
});
