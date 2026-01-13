import crypto from "crypto";
import bcrypt from "bcryptjs";
import { User } from "../models/user.model";

export const users: User[] = [
    {
        id: crypto.randomUUID(),
        username: "admin",
        firstname: "System",
        lastname: "Administrator",
        email: "admin@local.dev",
        status: "ACTIVE",
        passwordHash: bcrypt.hashSync("admin123", 10),
        role: "ADMIN"
    }
];
