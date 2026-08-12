import { IAuthToken } from './IAuthToken';
import { IAuthUser } from './IAuthUser';

export interface IAuthResponse extends IAuthUser, IAuthToken {}
