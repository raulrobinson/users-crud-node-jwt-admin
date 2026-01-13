import { User } from "../models/user.model";
import { v4 as uuid } from "uuid";
import bcrypt from "bcryptjs";

const adminPassword = bcrypt.hashSync("admin123", 10);

export const users: User[] = [
    {
        id: uuid(),
        username: "admin",
        firstname: "System",
        lastname: "Administrator",
        email: "admin@local.dev",
        status: "ACTIVE",
        passwordHash: adminPassword,
        role: "ADMIN"
    }
];
