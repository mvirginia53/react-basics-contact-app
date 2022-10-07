import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { ContactCard } from './ContactCard';
import { Contact } from './types';

interface ContactListProps {
	contacts: Contact[];
	removeContactHandler: (id: string | undefined) => void;
}

export const ContactList: FunctionComponent<ContactListProps> = ({
	contacts,
	removeContactHandler,
}) => {
	const renderContactLis = contacts.map((contact) => {
		return <ContactCard contact={contact} key={contact.id} />;
	});
	return (
		<div className='ui celled list' style={{ marginTop: '60px' }}>
			<h2>Contact List</h2>
			<Link to='/add'>
				<button
					className='ui button blue right'
					style={{ position: 'absolute', top: '52px', right: '65px' }}>
					Add contact
				</button>
			</Link>

			{renderContactLis}
		</div>
	);
};
