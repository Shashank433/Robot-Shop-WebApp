import { InterpolationConfig } from "@angular/compiler";
import { EmailValidator } from "@angular/forms";

export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password?: string;
}

export interface IUserCredentials {
  email: string;
  password: string;
}

