import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { SearchContextProvider } from './context/SearchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<AuthContextProvider>
			<React.StrictMode>
				<SearchContextProvider>
					<App />
				</SearchContextProvider>
			</React.StrictMode>
		</AuthContextProvider>
	</BrowserRouter>
);
