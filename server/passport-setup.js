import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import keys from './keys.js';

passport.use(
  new GoogleStrategy(
    {
      callbackURL: 'http://localhost:3000/auth/google/redirect',
      clientID: keys.google.clientId,
      clientSecret: keys.google.clientSecret,
    },
    (accessToken, refreshToken, profile, done) => {
      // // this is what ivy needs, but some if it just isn't available directly from google oAuth.
      // {
      //   firstName: profile.name.givenName, // good
      //   lastName: profile.name.familyName, // good
      //   username: profile.name.givenName, // check with ivy, use givenName and add a uuid maybe?
      //   email: values.email, // check with ivy, probably have as not required
      //   password: profile.id, // check with ivy, hash the id with bcrypt maybe?
      //   picture: profile.photos[0].value // good
      // }
      console.log(`profile`, profile);
    }
  )
);

export default passport;


