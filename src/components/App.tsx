import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { AddContact } from './AddContact';
import './App.css';
import { ContactList } from './ContactList';
import { Header } from './Header';
import { Contact } from './types';
import { ContactDetail } from './ContactDetail';
import api from '../api';
import { EditContact } from './EditContact';

function App() {
	const [contacts, setContacts] = useState<Contact[]>([]);

	const retriveContacts = async () => {
		const request = '/contacts';
		const response = await api.get(request);
		return response.data;
	};

	const addContactHandler = async (contact: any) => {
		const contactId = uuid();
		const body = {
			id: contactId,
			...contact,
		};

		const request = '/contacts';
		const response = await api.post(request, body);

		setContacts([...contacts, response.data]);
	};

	const removeContactHandler = async (id: string | undefined) => {
		await api.delete(`/contacts/${id}`);
		const newContactsList = contacts.filter((contact) => contact.id !== id);
		setContacts(newContactsList);
	};

	const updateContactHandler = async (contact: Contact) => {
		const response = await api.put(`/contacts/${contact.id}`, contact);
		const { id } = response.data;
		setContacts(contacts.map((contact) => (contact.id === id ? { ...response.data } : contact)));
	};

	useEffect(() => {
		const getContacts = async () => {
			const allContacts = await retriveContacts();
			if (allContacts) setContacts(allContacts);
		};

		getContacts();
	}, []);

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
						path='/edit'
						element={<EditContact updateContactHandler={updateContactHandler} />}></Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
