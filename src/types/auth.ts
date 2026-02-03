export interface User {
  id: number;
  name: string;
  email: string;
  area:any;
}

export interface LoginResponse {
  status: string;
  token: string;
  user: User;
}