export type UserStatus = "ACTIVE" | "INACTIVE";

export interface User {
    id: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    status: UserStatus;
    passwordHash: string;
    role: "ADMIN" | "USER";
}
