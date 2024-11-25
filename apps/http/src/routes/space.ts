import { Router } from "express";

export const SpaceRouter = Router();

SpaceRouter.post("/", (req, res) => {


});

SpaceRouter.get('/all', (req, res) => {
    res.send('all spaces route');
});

SpaceRouter.get('/:spaceId', (req, res) => {
    res.send('element route');
});

SpaceRouter.delete('/:spaceId', (req, res) => {
    res.send('delete space route');
});

SpaceRouter.post('/element', (req, res) => {
    res.send('elements route');
});

SpaceRouter.delete('/element', (req, res) => {
    res.send('element route');
});



