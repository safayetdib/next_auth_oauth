import { doSocialLogin } from '@/app/actions';
import React from 'react';

const SocialLogin = () => {
	return (
		<form
			action={doSocialLogin}
			className='space-y-4'>
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

export default SocialLogin;
