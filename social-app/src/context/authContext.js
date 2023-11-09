import { createContext, useEffect, useState } from 'react';

// primero creamos el contexto que utilizaremos
export const AuthContext = createContext();

// utilizamos useState para cambial en local storage si el usuario tiene activado darkmode.
export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(
		JSON.parse(localStorage.getItem('user')) || null // aqui valida si hay un usuario loggueado en el local storage, si no es null.
		// a diferencia del darkMode en este caso estamos usando un objeto en vez de un boolean ya que tenemos todos los datos del usuario loggueado.
	);

	// este toggle nos permite hacer el cambio, en este caso en vez de toggle usaremos un login function
	const login = () => {
		// La api retornara la info del usuario.
		setCurrentUser({
			id: 1,
			name: 'John Doe',
			profilePic:
				'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		});
	};

	// con useEffect hacemos el cambio en localStorage, esta funcion coloca en el local storage la informacion del usuario.
	useEffect(() => {
		localStorage.setItem('user', JSON.stringify(currentUser));
	}, [currentUser]);

	return (
		// retornamos darkmodeContextProvider
		<AuthContext.Provider value={{ currentUser, login }}>
			{children}
		</AuthContext.Provider>
	);
};
