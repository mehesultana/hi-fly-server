import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
	res.send('hellooooooooo this auth');
});

export default router;
