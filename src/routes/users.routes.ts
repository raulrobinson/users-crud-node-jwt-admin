import { Router } from "express";
import { users } from "../store/users.store";
import bcrypt from "bcryptjs";
import { authMiddleware } from "../middleware/auth.middleware";
import { User } from "../models/user.model";

const router = Router();
router.use(authMiddleware);

// LIST
router.get("/", (_, res) => {
    res.json(users.map(u => ({ ...u, passwordHash: undefined })));
});

// GET BY ID
router.get("/:id", (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.sendStatus(404);
    res.json({ ...user, passwordHash: undefined });
});

// CREATE
router.post("/", (req, res) => {
    const { username, firstname, lastname, email, password } = req.body;

    const user = {
        id: crypto.randomUUID(),
        username,
        firstname,
        lastname,
        email,
        status: "ACTIVE",
        role: "USER",
        passwordHash: bcrypt.hashSync(password, 10)
    };

    users.push(<User>user);
    res.status(201).json({ id: user.id });
});

// UPDATE
router.put("/:id", (req, res) => {
    const user = users.find(u => u.id === req.params.id);
    if (!user) return res.sendStatus(404);

    Object.assign(user, req.body);
    res.sendStatus(204);
});

// DELETE
router.delete("/:id", (req, res) => {
    const index = users.findIndex(u => u.id === req.params.id);
    if (index === -1) return res.sendStatus(404);

    users.splice(index, 1);
    res.sendStatus(204);
});

export default router;
