export interface UserState {
  name: string;
  count: number
}

export enum UserActionEnum {
  SET_COUNT = "SET_COUNT",
}

export interface SetCountAction {
  type: UserActionEnum.SET_COUNT;
  payload: number;
}

export type UserAction =
  SetCountAction