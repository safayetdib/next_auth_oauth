import { doSocialLogin } from '@/app/actions';
import React from 'react';

const LoginForm = () => {
	return (
		<form
			action={doSocialLogin}
			className='w-full max-w-sm space-y-4 border p-4 rounded'>
			<button
				type='submit'
				name='action'
				value='google'
				className='w-full bg-red-500 text-white font-bold py-2 px-4 rounded'>
				Sign in with Google
			</button>
			<button
				type='submit'
				name='action'
				value='github'
				className='w-full bg-gray-700 text-white font-bold py-2 px-4 rounded'>
				Sign in with GitHub
			</button>
		</form>
	);
};

export default LoginForm;
