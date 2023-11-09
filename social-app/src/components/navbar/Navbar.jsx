import './navbar.scss';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';
import { AuthContext } from '../../context/authContext';

const Nabvar = () => {
	// llamamos al useContext()
	const { toggle, darkMode } = useContext(DarkModeContext);
	const { currentUser } = useContext(AuthContext);

	return (
		<div className='navbar'>
			<div className='left'>
				<Link to='/' style={{ textDecoration: 'none' }}>
					<span>AppSocial</span>
				</Link>
				<HomeOutlinedIcon />

				{/* en la siguiente funcion validamos si el darkmode esta activo o no activo y cambiamos el icono */}
				{darkMode ? (
					<WbSunnyOutlinedIcon onClick={toggle} />
				) : (
					<DarkModeOutlinedIcon onClick={toggle} />
				)}
				<GridViewOutlinedIcon />
				<div className='search'>
					<SearchOutlinedIcon />
					<input type='text' placeholder='search...' />
				</div>
			</div>
			<div className='right'>
				<PersonOutlineOutlinedIcon />
				<EmailOutlinedIcon />
				<NotificationsOutlinedIcon />
				<div className='user'>
					<img src={currentUser.profilePic} alt='person' />
					<span>{currentUser.name}</span>
				</div>
			</div>
		</div>
	);
};

export default Nabvar;
