import { useContext } from 'react';
import './comments.scss';
import { AuthContext } from '../../context/authContext';

const Comments = () => {
	const { currentUser } = useContext(AuthContext);
	//Temporary
	const comments = [
		{
			id: 1,
			desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, modi! Officia omnis iure consequatur ex dolorum amet nemo est expedita cumque mollitia, maiores eaque, sit molestias ipsam. Mollitia, odit quam.',
			name: 'Jean Cuban',
			userId: 1,
			profilePicture:
				'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 2,
			desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, modi! Officia omnis iure consequatur ex dolorum amet nemo est expedita cumque mollitia, maiores eaque, sit molestias ipsam. Mollitia, odit quam.',
			name: 'Martha Thompson',
			userId: 1,
			profilePicture:
				'https://images.pexels.com/photos/16406782/pexels-photo-16406782/free-photo-of-moda-mujer-verano-nina.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 3,
			desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, modi! Officia omnis iure consequatur ex dolorum amet nemo est expedita cumque mollitia, maiores eaque, sit molestias ipsam. Mollitia, odit quam.',
			name: 'Pedro Navajas',
			userId: 1,
			profilePicture:
				'https://images.pexels.com/photos/1526890/pexels-photo-1526890.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
	];

	return (
		<div className='comments'>
			<div className='write'>
				<img src={currentUser.profilePic} alt='' />
				<input type='text' placeholder='write a comment' />
				<button>Send</button>
			</div>
			{comments.map((comment) => (
				<div className='comment'>
					<img src={comment.profilePicture} alt='' />
					<div className='info'>
						<span>{comment.name}</span>
						<p>{comment.desc}</p>
					</div>
					<div className='date'>1 hour ago</div>
				</div>
			))}
		</div>
	);
};

export default Comments;
