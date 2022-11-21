
import { Router } from 'express';
import { User } from './User.model.js';
import axios from 'axios';


const router = Router();



router.get('/', (req, res) => {
  res.json({ message: 'Hello world' });
});



export default router;
