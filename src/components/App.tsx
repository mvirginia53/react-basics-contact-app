import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { AddContact } from './AddContact';
import './App.css';
import { ContactList } from './ContactList';
import { Header } from './Header';
import { Contact } from './types';
import { ContactDetail } from './ContactDetail';
import { DeleteContact } from './DeleteContact';

function App() {
	const LOCAL_STORAGE_KEY = 'contacts';
	const [contacts, setContacts] = useState<Contact[]>([]);
	const [contactAdded, setContactAdded] = useState(false);

	const addContactHandler = (contact: any) => {
		const contactId = uuid();
		setContacts([...contacts, { id: contactId, ...contact }]);
		setContactAdded(true);
	};

	const removeContactHandler = (id: string | undefined) => {
		const newContactsList = contacts.filter((contact) => contact.id !== id);
		setContacts(newContactsList);
	};

	useEffect(() => {
		if (localStorage[LOCAL_STORAGE_KEY]) {
			const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '');
			if (retriveContacts) setContacts(retriveContacts);
		}
	}, []);

	useEffect(() => {
		if (contactAdded) {
			localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
			setContactAdded(false);
		}
	}, [contacts, contactAdded]);

	return (
		<div className='ui container'>
			<Router>
				<Header />
				<Routes>
					<Route
						path='/add'
						element={<AddContact addContactHandler={addContactHandler} />}></Route>
					<Route
						path='/'
						element={
							<ContactList contacts={contacts} removeContactHandler={removeContactHandler} />
						}></Route>

					<Route path='/contact/:id' element={<ContactDetail />}></Route>
					<Route
						path='/delete'
						element={<DeleteContact removeContactHandler={removeContactHandler} />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
