import { createSlice } from '@reduxjs/toolkit';
import members from './members';
import { getToday } from './utils';

export const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    date: getToday(),
    classes: {
      1: [1, 2, 3, 4, 5, 6, 7],
      2: [1, 2, 3, 4, 5],
      3: [1, 2, 3, 4],
    },
    theNumberOfMembers: undefined,
    members,
    checkedId: [
    ],
  },
  reducers: {
    setDate: (state, { payload: date }) => ({
      ...state,
      date,
    }),
    initiateChecks: (state) => ({
      ...state,
      members: state.members.map((member) => ({
        ...member,
        checkedToady: state.checkedId.includes(member.id),
      })),
    }),
    checkId: (state, { payload: member }) => {
      let checkedId;

      if (state.checkedId.includes(member.id)) {
        checkedId = state.checkedId.filter((id) => id !== member.id);
      } else {
        checkedId = [...state.checkedId, member.id];
      }

      const checkedMembers = state.members.map((one) => ({
        ...one,
        checkedToady: !!checkedId.includes(one.id),
      }));

      return {
        ...state,
        members: checkedMembers,
        checkedId,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setDate, initiateChecks, checkId,
} = actions;

export default reducer;
