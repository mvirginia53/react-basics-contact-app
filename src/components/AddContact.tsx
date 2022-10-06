import React, { useState, FunctionComponent } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';

interface addContactProps {
	addContactHandler: (contact: any) => void;
}

export const AddContact: FunctionComponent<addContactProps> = ({ addContactHandler }) => {
	let navigate = useNavigate();
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');

	const add = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		if (name === '' || email === '') alert('all the fields are required');
		addContactHandler({
			name,
			email,
		});
		setEmail('');
		setName('');
		navigate('/');
	};
	return (
		<div className='ui main' style={{ marginTop: '60px' }}>
			<h2>Add contact</h2>
			<form className='ui form' onSubmit={add}>
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

				<button className='ui button blue'>Add</button>
			</form>
		</div>
	);
};
