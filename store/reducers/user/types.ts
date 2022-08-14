export interface IUserState {
  email: string | null;
  idToken: string | null;
  refreshToken: string | null;
  status: string | null,
}

export interface IFormData {
  name: string;
  email: string;
  password: string;
}

export enum Status {
  Success = 'success',
  Loading = 'loading',
  Error = 'error'
}