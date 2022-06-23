import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { List } from './pages/List/List';
import { Hotel } from './pages/Hotel/Hotel';

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />}></Route>
			<Route path="/hotels" element={<List />}></Route>
			<Route path="/hotels/:id" element={<Hotel />}></Route>
		</Routes>
	);
};

export default App;
