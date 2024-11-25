import { Router } from "express";

export const AdminRouter = Router();

AdminRouter.post('/elements', (req, res) => {
    res.send('elements route');
});

AdminRouter.put('/element/:elementId', (req, res) => {
    res.send('element route');
});

AdminRouter.post('/avatars', (req, res) => {
    res.send('avatars route');
});

AdminRouter.get('/map', (req, res) => {
    res.send('map route');
});


