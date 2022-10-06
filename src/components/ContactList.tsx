import React, { FunctionComponent } from 'react';
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
	const deleteContact = (id: string | undefined) => {
		if (id) removeContactHandler(id);
	};
	const renderContactLis = contacts.map((contact) => {
		return <ContactCard contact={contact} key={contact.id} deleteContact={deleteContact} />;
	});
	return <div className='ui celled list'>{renderContactLis}</div>;
};
