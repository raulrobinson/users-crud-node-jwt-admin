import { Router } from "express";
import { login } from "../services/auth.service";

const router = Router();

router.post("/login", (req, res) => {
    const { username, password } = req.body;

    try {
        const token = login(username, password);
        res.json({ token });
    } catch {
        res.status(401).json({ message: "Invalid credentials" });
    }
});

export default router;
