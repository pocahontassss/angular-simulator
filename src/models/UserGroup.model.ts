import { IUser } from './User.model';
export interface IUserGroup {
  id: number;
  users: IUser[];
  groupName: string;
  groupNumber: number;
}
