import React, { FunctionComponent } from 'react';
import { Contact } from './types';
import user from './user.png';

interface ContactCardProps {
	contact: Contact;
	deleteContact: (id: string | undefined) => void;
}

export const ContactCard: FunctionComponent<ContactCardProps> = ({ contact, deleteContact }) => {
	return (
		<div className='item'>
			<img className='ui avatar image' src={user} alt='user' />
			<div className='content'>
				<div className='header'>{contact.name}</div>
				<div>{contact.email}</div>
			</div>

			<i
				className='trash alternate outline icon'
				style={{
					color: 'red',
					display: 'block',
					float: 'right',
					fontSize: '16px',
					marginTop: '7px',
				}}
				onClick={() => deleteContact(contact.id)}></i>
		</div>
	);
};
