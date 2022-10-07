import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Contact } from './types';
import user from './user.png';

interface ContactCardProps {
	contact: Contact;
}

export const ContactCard: FunctionComponent<ContactCardProps> = ({ contact }) => {
	return (
		<div className='item' style={{ padding: '16px 0' }}>
			<img className='ui avatar image' src={user} alt='user' />
			<div className='content'>
				<Link to={`/contact/${contact.id}`} state={{ contact }}>
					<div className='header'>{contact.name}</div>
					<div>{contact.email}</div>
				</Link>
			</div>

			<Link to={`/delete`} state={{ id: contact.id }}>
				<i
					className='trash alternate outline icon'
					style={{
						color: 'red',
						display: 'block',
						float: 'right',
						fontSize: '16px',
						marginTop: '7px',
					}}></i>
			</Link>
		</div>
	);
};
