import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';

const app = express();

dotenv.config();

const connect = async () => {
	try {
		await mongoose.connect(process.env.MONGODB);
		console.log('MongoDB connect successfully');
	} catch (error) {
		console.log('MongoDB can not connected', error);
		throw error;
	}
};

mongoose.connection.on('disconnected', () => {
	console.log('MongoDB disconnected');
});

// mongoose.connection.on('connected', () => {
// 	console.log('mongodb connected');
// });

// app.get('/', (req, res) => {
// 	res.send('hellooooooooo');
// });

//	middlewares

app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next) => {
	return res.status(500).json('hello error from handler');
});

app.listen(5000, () => {
	connect();
	console.log('PORT connected successfully!');
});
