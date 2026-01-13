import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { users } from "../store/users.store";

const JWT_SECRET = "super-secret-key";
const JWT_EXPIRES = "1h";

export function login(username: string, password: string) {
    const user = users.find(u => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
        throw new Error("Invalid credentials");
    }

    return jwt.sign(
        {
            sub: user.id,
            username: user.username,
            role: user.role
        },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRES }
    );
}

export { JWT_SECRET };
