import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Navigate,
} from 'react-router-dom';
import Navbar from './components/navbar/Navbar.jsx';
import LeftBar from './components/leftbar/LeftBar.jsx';
import RightBar from './components/rightbar/RightBar.jsx';
import Profile from './pages/profile/Profile.jsx';
import Home from './pages/home/Home.jsx';
import './style.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext.js';
import { AuthContext } from './context/authContext.js';

function App() {
	// el current user nos definira que children mostrar, ya sea el home o el profile siempre y cuando este loggueado.
	const { currentUser } = useContext(AuthContext);

	// con el hook useContext(), estamos llamando a la funcion DarkModeContext para hacer el cambio de dark o light.
	const { darkMode } = useContext(DarkModeContext);

	// dentro de este layout definimos el outlet, que es el que nos dara la ruta protegida.
	const Layout = () => {
		return (
			<div className={`theme-${darkMode ? 'dark' : 'light'}`}>
				<Navbar />
				<div style={{ display: 'flex' }}>
					<LeftBar />
					<div style={{ flex: 6 }}>
						<Outlet />
					</div>
					<RightBar />
				</div>
			</div>
		);
	};

	// aqui le decimos a la ruta protegida que recibira a los children que son el Home y el profile
	const ProtectedRoute = ({ children }) => {
		if (!currentUser) {
			// si el current user no esta loggueado nos redirigira al login.
			return <Navigate to='/login' />;
		}
		return children;
	};

	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				// en esta seccion el estamos definiendo que el layout sera nuestra ruta protegida.
				<ProtectedRoute>
					<Layout />
				</ProtectedRoute>
			),
			children: [
				{
					path: '/',
					element: <Home />,
				},
				{
					path: '/profile/:id',
					element: <Profile />,
				},
			],
		},
		{
			path: '/login',
			element: <Login />,
		},
		{
			path: '/register',
			element: <Register />,
		},
	]);

	return (
		<div className='App'>
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
