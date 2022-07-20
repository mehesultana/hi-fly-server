import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { List } from './pages/List/List';
import { Hotel } from './pages/Hotel/Hotel';
import { Login } from './pages/Login/Login';

const App = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />}></Route>
			<Route path='/hotels' element={<List />}></Route>
			<Route path='/hotels/:id' element={<Hotel />}></Route>
			<Route path='/login' element={<Login />}></Route>
		</Routes>
	);
};

export default App;
