import React, { useState, FunctionComponent } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface updateContactProps {
	updateContactHandler: (contact: any) => void;
}

export const EditContact: FunctionComponent<updateContactProps> = ({ updateContactHandler }) => {
	let navigate = useNavigate();
	const location = useLocation();
	const contact = location.state.contact;

	const [name, setName] = useState(contact.name);
	const [email, setEmail] = useState(contact.email);
	const [id, setId] = useState(contact.id);

	const update = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (name === '' || email === '') alert('all the fields are required');
		updateContactHandler({
			name,
			email,
			id,
		});
		setEmail('');
		setName('');
		navigate('/');
	};
	return (
		<div className='ui main' style={{ marginTop: '60px' }}>
			<h2>Edit contact</h2>
			<form className='ui form' onSubmit={update}>
				<div className='field'>
					<label>Name</label>
					<input
						type={'text'}
						name={'name'}
						placeholder='Name'
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div className='field'>
					<label>Email</label>
					<input
						type={'text'}
						name={'email'}
						placeholder='Email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>
				</div>

				<button className='ui button blue'>Update</button>
			</form>
		</div>
	);
};
