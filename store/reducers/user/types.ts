export interface IUserState {
  email: string;
  idToken: string;
  refreshToken: string;
  status: string,
  statusSignIn: string
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