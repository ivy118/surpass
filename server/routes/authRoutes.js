import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get(
  '/google',
  passport.authenticate('google', {
    scope: ['profile'],
  })
);

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {

  res.status(200).json('placeholder response for redirect');
});

export default router;
