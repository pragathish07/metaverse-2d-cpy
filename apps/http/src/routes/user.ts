import { Router } from "express";

export const UserRouter = Router();

UserRouter.get("/metadata", (req, res) => {
    res.send("metadata route");
});

UserRouter.get("/metadata/bulk", (req, res) => {
    res.send("metadata bulk route");
});