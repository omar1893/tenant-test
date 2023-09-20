export interface AnimalData {
  animal: {
    name: string;
    img: string;
  };
}

export interface LoginResponse {
  message: string;
  token?: string;
}

export interface FormValue{
    username: string;
    password: string;
    otp: string;
}
