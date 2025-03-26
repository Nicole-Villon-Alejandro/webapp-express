import express from 'express';

const router = express.Router();

import { index, show, destroy, storeReview } from '../controllers/movieController.js';

//Rotte

//index
//localhost:3000/movies
router.get('/', index);

//show
//localhost:3000/movies/:id
router.get('/:id', show);

//destroy
//localhost:3000/api/movies/:id
router.delete('/:id', destroy);

//storeReview
//localhost:3000/movies/:id/reviews
router.post('/:id/reviews', storeReview);

export default router;