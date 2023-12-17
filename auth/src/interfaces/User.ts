import { HydratedDocument, Model, QueryWithHelpers } from 'mongoose';

export interface IUser {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    username: string;
    birthdate: Date;
}

export interface IUserMethods {
    comparePassword: (password: string) => Promise<boolean>;
    getJWT: () => string;
}

export interface UserQueryHelpers {
    byEmail: (email: string) => QueryWithHelpers<HydratedDocument<IUser>, HydratedDocument<IUser>>;
    byUsername: (username: string) => QueryWithHelpers<HydratedDocument<IUser>, HydratedDocument<IUser>>;
}

export interface IUserModel extends Model<IUser, UserQueryHelpers, IUserMethods> {}
