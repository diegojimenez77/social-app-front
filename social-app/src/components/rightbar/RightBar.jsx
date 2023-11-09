import './rightBar.scss';

const RightBar = () => {
	return (
		<div className='rightBar'>
			<div className='container'>
				<div className='item'>
					<span>Suggestions for You</span>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<span>Jane Doe</span>
						</div>
						<div className='buttons'>
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<span>Jessy Stevens</span>
						</div>
						<div className='buttons'>
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
				</div>
				<div className='item'>
					<span>Latest Activities</span>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<p>
								<span>Jane Doe </span>
								changed her cover picture
							</p>
						</div>
						<div>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/5490235/pexels-photo-5490235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<p>
								<span>Tony Hwk </span>
								changed her cover picture
							</p>
						</div>
						<div>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<p>
								<span>Daego Verdag </span>
								changed her cover picture
							</p>
						</div>
						<div>
							<span>1 min ago</span>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<p>
								<span>Ruben Villaneuve </span>
								changed her cover picture
							</p>
						</div>
						<div>
							<span>1 min ago</span>
						</div>
					</div>
				</div>
				<div className='item'>
					<span>Online Friends</span>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/4890259/pexels-photo-4890259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div className='online'></div>
							<span>Ruben Villaneuve</span>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/10442527/pexels-photo-10442527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div className='online'></div>
							<span>Amanda Mikel</span>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/5019924/pexels-photo-5019924.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div className='online'></div>
							<span>Juan Gab</span>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div className='online'></div>
							<span>Danielle Rom</span>
						</div>
					</div>
					<div className='user'>
						<div className='userInfo'>
							<img
								src='https://images.pexels.com/photos/1656684/pexels-photo-1656684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
								alt=''
							/>
							<div className='online'></div>
							<span>Andrew Reynolds</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightBar;
