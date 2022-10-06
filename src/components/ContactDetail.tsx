import React, { FunctionComponent } from 'react';
import { useLocation, Link } from 'react-router-dom';
import user from './user.png';

export const ContactDetail: FunctionComponent = () => {
	const location = useLocation();
	const contact = location.state.contact;
	return (
		<div className='main' style={{ marginTop: '60px' }}>
			<div className='ui card centeres'>
				<div className='image'>
					<img src={user} alt='user' />
				</div>
				<div className='content'>
					<div className='header'>{contact.name}</div>
					<div className='description'>{contact.email}</div>
				</div>
			</div>

			<div className='centered grid'>
				<Link to='/'>
					<button className='ui button blue'>Back to Contact list</button>
				</Link>
			</div>
		</div>
	);
};
