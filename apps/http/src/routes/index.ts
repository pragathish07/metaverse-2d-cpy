import { Router } from 'express';
import { UserRouter } from './user';
import { AdminRouter } from './admin';
import { SpaceRouter } from './space';


import { SignInSchema, SignUpSchema } from '../types';

let client: any;
(async () => {
  client = await import('@repo/db/client');
})();

export const router = Router();

router.post('/signup', async (req, res): Promise<any> => {

   const parsedBody = SignUpSchema.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({ error: 'Invalid request body' });
  }
  
  try {
    client.user.create({
      data: {
        username: parsedBody.data.username,
        password: parsedBody.data.password,
        // avatarId:parsedBody.data.type ===  'admin' ? 'admin' : 'user',
        role: parsedBody.data.type ===  'admin' ? 'admin' : 'user',
      
    }
  })

  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }

  return res.status(200).json({ message: 'Signup successful' });
});

router.post('/login', (req, res) => {
  res.send('login route');
});

router.get('/elements', (req, res) => { 
  res.send('elements route');
} );

router.get('/avatars', (req, res) => {
  res.send('avatars route');
});


router.use('/users', UserRouter);
router.use('/admin', AdminRouter);
router.use('/spaces', SpaceRouter);





