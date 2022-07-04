import * as types from '../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootMainState } from '../../tools/store';

const user = createSlice({
  name: 'user',
  initialState: { users: [], init: false } as types.UsersState,
  reducers: {
    addUsers(state, action: PayloadAction<types.UsersAction>) {
      if (!action.payload.users || action.payload.users.length == 0) {
        return (state = { ...state, init: true });
      }

      if (!state.users || state.users.length == 0) {
        return (state = {
          users: action.payload.users,
          init: true,
        });
      }

      for (let x = 0; x < action.payload.users.length; x++) {
        const exist = state.users.find((newUser) => action.payload.users[x]._id == newUser._id);
        if (!exist) state.users.push(action.payload.users[x]);
      }
      state.init = true;
      return state;
    },
    removeUsers(state) {
      return (state = { ...state, users: [] });
    },
  },
});

export const usersState = (state: RootMainState): types.UsersState => state.users;
export const { removeUsers, addUsers } = user.actions;
export default user.reducer;
