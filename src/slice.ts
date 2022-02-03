import { createSlice } from "@reduxjs/toolkit";
import { getToday } from "./utils";

type MemberProps = {
  id: number,
  isStudent: boolean,
  name: string,
  grade: number,
  class: number,
  attendedDates: string[],
}

type InitialStateProps = {
  date: string,
  members: MemberProps[]
}

type ReducersProps = {
  setMembers: any
}

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: <InitialStateProps>{
    date: getToday(),
    members: [],
    newMember: {
      name: '',
      grade: undefined,
      class: undefined
    }
  },
  reducers: <ReducersProps>{
    setMembers: (state: InitialStateProps, { payload: members }: { payload: { member: MemberProps[] } }) => ({ ...state, members: [...state.members, members] }),
  }
})

export const {
  setMembers
} = actions

export default reducer;

export function test() {
  return 0;
}
