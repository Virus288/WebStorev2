import user from '../redux/reducers/users';
import { configureStore } from '@reduxjs/toolkit';

export type RootMainState = ReturnType<typeof mainStore.getState>;

export const mainStore = configureStore({
  reducer: {
    users: user,
  },
});

export type MainDispatch = typeof mainStore.dispatch;
