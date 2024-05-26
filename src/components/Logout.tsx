import { doLogout } from '@/app/actions';
import React from 'react';

const Logout = () => {
	return (
		<form action={doLogout}>
			<button
				type='submit'
				className='w-full bg-red-500 text-white font-bold py-2 px-4 rounded'>
				Logout
			</button>
		</form>
	);
};

export default Logout;
