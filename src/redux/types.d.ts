import { IUserSchemaFull } from '../../backend/modules/users/types';

export interface UsersAction {
  users: IUserSchemaFull[];
}

export interface UsersState {
  users: IUserSchemaFull[];
  init: boolean;
}
