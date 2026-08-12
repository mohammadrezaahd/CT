import { UserRole } from "./Common.interface";

export interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: Date | string;
  role: UserRole;
  avatarUrl?: string;
  createdAt: string;
  updatedAt: string;
}
