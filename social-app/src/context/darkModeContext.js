import { createContext, useEffect, useState } from 'react';

// primero creamos el contexto que utilizaremos
export const DarkModeContext = createContext();

// utilizamos useState para cambial en local storage si el usuario tiene activado darkmode.
export const DarkModeContextProvider = ({ children }) => {
	const [darkMode, setDarkMode] = useState(
		JSON.parse(localStorage.getItem('darkMode')) || false
	);

	// este toggle nos permite hacer el cambio
	const toggle = () => {
		setDarkMode(!darkMode);
	};

	// con useEffect hacemos el cambio en localStorage.
	useEffect(() => {
		localStorage.setItem('darkMode', darkMode);
	}, [darkMode]);

	return (
		// retornamos darkmodeContextProvider
		<DarkModeContext.Provider value={{ darkMode, toggle }}>
			{children}
		</DarkModeContext.Provider>
	);
};

// *useContext() = para el use context del darkmode, se aplica en 4 archivos.
// 1. Primero creamos el archivo darkModeContext.js y seguimos los pasos de los comentarios.
// 2. en Index.js envolvemos el componente <App /> dentro del <DarkModeContextProvider>
// 3. En App.js usamos el hook useContext() para llamar el darkmode y aplicarlo en la clase del layout
// 4. En el Navbar llamamos de igual forma el useContext() y aplicamos el toggle del icono.
