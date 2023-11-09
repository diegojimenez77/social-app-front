import Post from '../post/Post';
import './posts.scss';

const Posts = () => {
	//temporary
	const posts = [
		{
			id: 1,
			name: 'John Doe',
			userId: 1,
			profilePic:
				'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			desc: 'Visit of a city form the USA',
			img: 'https://images.pexels.com/photos/13136192/pexels-photo-13136192.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
		{
			id: 2,
			name: 'Jane Doe',
			userId: 2,
			profilePic:
				'https://images.pexels.com/photos/14862535/pexels-photo-14862535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
			desc: ' Me and my best friend having a road trip',
			img: 'https://images.pexels.com/photos/2409681/pexels-photo-2409681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
		},
	];
	return (
		<div className='posts'>
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	);
};

export default Posts;
