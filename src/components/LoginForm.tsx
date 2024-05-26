'use client';

import React, { useState } from 'react';
import SocialLogin from './SocialLogin';
import { doCredentialsLogin } from '@/app/actions';
import { useRouter } from 'next/navigation';
import { error } from 'console';

const LoginForm = () => {
	const router = useRouter();
	const [error, setError] = useState<string | null>(null);

	const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		try {
			const formData = new FormData(event.currentTarget);
			const response = await doCredentialsLogin(formData);

			if (!!response.error) {
				setError(response.error.message);
			} else {
				router.push('/dashboard');
			}
		} catch (error) {
			setError('Invalid credentials');
		}
	};

	return (
		<div className='w-full max-w-sm space-y-4 border p-4 rounded'>
			<form
				onSubmit={handleFormSubmit}
				className='space-y-4'>
				<div>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='Email'
						required
						className='w-full border p-2 rounded bg-gray-700'
					/>
				</div>
				<div>
					<input
						type='password'
						name='password'
						id='password'
						placeholder='Password'
						required
						className='w-full border p-2 rounded bg-gray-700'
					/>
				</div>
				{error && (
					<div>
						<p className='text-red-500 text-center font-bold text-sm'>
							{error}
						</p>
					</div>
				)}
				<button
					type='submit'
					className='w-full bg-blue-500 text-white font-bold py-2 px-4 rounded'>
					Login
				</button>
			</form>
			<div className='w-full border rounded bg-gray-500'></div>
			<SocialLogin />
		</div>
	);
};

export default LoginForm;
