import React, { FunctionComponent } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

interface DeleteContactProps {
	removeContactHandler: (id: string | undefined) => void;
}

export const DeleteContact: FunctionComponent<DeleteContactProps> = ({ removeContactHandler }) => {
	const location = useLocation();
	const navigate = useNavigate();
	const contactId = location.state.id;
	const deleteContact = (id: string | undefined) => {
		if (id) removeContactHandler(id);
		navigate('/');
	};
	return (
		<div style={{ marginTop: '60px' }}>
			<div className='description'>Do you want to delete thsi contact?</div>

			<div className='actions'>
				<Link to='/'>
					<div className='ui button'>Cancel</div>
				</Link>

				<div className='ui button' onClick={() => deleteContact(contactId)}>
					OK
				</div>
			</div>
		</div>
	);
};
