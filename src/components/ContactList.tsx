import React, { FunctionComponent, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ContactCard } from './ContactCard';
import { Contact } from './types';

interface ContactListProps {
	contacts: Contact[];
	removeContactHandler: (id: string | undefined) => void;
	serachQueryHandler: (value: string | undefined) => void;
}

export const ContactList: FunctionComponent<ContactListProps> = ({
	contacts,
	removeContactHandler,
	serachQueryHandler,
}) => {
	const inputElem = useRef<HTMLInputElement>(null);
	const renderContactList = contacts.map((contact) => {
		return (
			<ContactCard
				contact={contact}
				key={contact.id}
				removeContactHandler={removeContactHandler}
			/>
		);
	});

	const getQuerySearch = () => {
		const value = inputElem.current?.value;
		serachQueryHandler(inputElem.current?.value);
	};
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
			<div className='ui search' style={{ marginBottom: '16px' }}>
				<div className='ui icon input'>
					<input
						ref={inputElem}
						type='text'
						placeholder='Search contact'
						className='prompt'
						onChange={getQuerySearch}
					/>
					<i className='search icon' />
				</div>
			</div>
			{renderContactList.length > 0 ? renderContactList : 'No contacts available'}{' '}
		</div>
	);
};
