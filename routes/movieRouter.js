import express from 'express';
import upload from '../middlewares/multer.js';

const router = express.Router();

import { index, show, destroy, storeReview, store } from '../controllers/movieController.js';

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

//store
//creazione di un nuovo film
//localhost:3000/movies con metodo POST

router.post( '/', upload.single('image'), store ) 


export default router;