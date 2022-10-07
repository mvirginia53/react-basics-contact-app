import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { Contact } from './types';
import user from './user.png';

interface ContactCardProps {
	contact: Contact;
	removeContactHandler: (id: string | undefined) => void;
}

export const ContactCard: FunctionComponent<ContactCardProps> = ({
	contact,
	removeContactHandler,
}) => {
	const deleteContact = (id: string | undefined) => {
		if (id) removeContactHandler(id);
	};
	return (
		<div className='item' style={{ padding: '16px 0' }}>
			<img className='ui avatar image' src={user} alt='user' />
			<div className='content'>
				<Link to={`/contact/${contact.id}`} state={{ contact }}>
					<div className='header'>{contact.name}</div>
					<div>{contact.email}</div>
				</Link>
			</div>

			<i
				className='trash alternate outline icon'
				onClick={() => deleteContact(contact.id)}
				style={{
					color: 'red',
					display: 'block',
					float: 'right',
					fontSize: '16px',
					marginTop: '7px',
				}}></i>
			<Link to={'/edit'} state={{ contact }}>
				<i
					className='edit alternate outline icon'
					onClick={() => contact.id}
					style={{
						color: 'blue',
						display: 'block',
						float: 'right',
						fontSize: '16px',
						marginTop: '7px',
						marginRight: '10px',
					}}></i>
			</Link>
		</div>
	);
};
