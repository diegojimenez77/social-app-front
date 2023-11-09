import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import { DarkModeContextProvider } from './context/darkModeContext';
import { AuthContextProvider } from './context/authContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		{/* aqui envolvemos App con el ContextProvider */}
		<DarkModeContextProvider>
			{/* // aqui tambien envolvemos App en en authcontextprovider */}
			<AuthContextProvider>
				<App />
			</AuthContextProvider>
		</DarkModeContextProvider>
	</React.StrictMode>
);
