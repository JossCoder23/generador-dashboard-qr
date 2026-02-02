export interface User {
  id: number;
  name: string;
  email: string;
}

export interface LoginResponse {
  status: string;
  token: string;
  user: User;
}