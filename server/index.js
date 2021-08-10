import express from 'express';
import cors from 'cors';
import passportSetup from './passport-setup.js';

import authRoutes from './routes/authRoutes.js'

const PORT = process.env.PORT || 3000;
const app = express();

app.use('/auth', authRoutes)

app.get('/', (req, res) => {
  res.status(200).json('this works')
})
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
