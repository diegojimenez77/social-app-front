import './profile.scss';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import CelebrationIcon from '@mui/icons-material/Celebration';
import LanguageIcon from '@mui/icons-material/Language';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { PlaceOutlined } from '@mui/icons-material';
import Posts from '../../components/posts/Posts';

const Profile = () => {
	return (
		<div className='profile'>
			<div className='images'>
				<img
					src='https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt=''
					className='cover'
				/>
				<img
					src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
					alt=''
					className='profilePic'
				/>
			</div>
			<div className='profileContainer'>
				<div className='uInfo'>
					<div className='left'>
						<a href='http://facebook.com'>
							<FacebookOutlinedIcon fontSize='large' />
						</a>
						<a href='http://facebook.com'>
							<InstagramIcon fontSize='large' />
						</a>
						<a href='http://facebook.com'>
							<CelebrationIcon fontSize='large' />
						</a>
						<a href='http://facebook.com'>
							<LinkedInIcon fontSize='large' />
						</a>
						<a href='http://facebook.com'>
							<PinterestIcon fontSize='large' />
						</a>
					</div>
					<div className='center'>
						<span>John Doe</span>
						<div className='info'>
							<div className='item'>
								<PlaceOutlined />
								<span>USA</span>
							</div>
							<div className='item'>
								<LanguageIcon />
								<span>social.dev</span>
							</div>
						</div>
						<button>follow</button>
					</div>
					<div className='right'>
						<EmailOutlinedIcon />
						<MoreVertOutlinedIcon />
					</div>
				</div>
				<Posts />
			</div>
		</div>
	);
};

export default Profile;
