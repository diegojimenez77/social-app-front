import { useContext } from 'react';
import './stories.scss';
import { AuthContext } from '../../context/authContext';

const Stories = () => {
	const { currentUser } = useContext(AuthContext);
	// Temporary dummy data
	const stories = [
		{
			id: 1,
			name: 'Jammie Cp',
			img: 'https://images.pexels.com/photos/1413412/pexels-photo-1413412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 2,
			name: 'Wan ASM',
			img: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 3,
			name: 'Leidy Rose',
			img: 'https://images.pexels.com/photos/14855954/pexels-photo-14855954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 4,
			name: 'Vico Asm',
			img: 'https://images.pexels.com/photos/716906/pexels-photo-716906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
	];
	return (
		<div className='stories'>
			<div className='story'>
				<img src={currentUser.profilePic} alt='' />
				<span>{currentUser.name}</span>
				<button>+</button>
			</div>
			{stories.map((story) => (
				<div className='story' key={story.id}>
					<img src={story.img} alt='' />
					<span>{story.name}</span>
				</div>
			))}
		</div>
	);
};

export default Stories;
