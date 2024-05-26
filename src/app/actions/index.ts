'use server';

import { signIn, signOut } from '@/auth';

export async function doCredentialsLogin(formData: FormData) {
	try {
		const response = signIn('credentials', {
			email: formData.get('email') as string,
			password: formData.get('password') as string,
			redirect: false,
		});
		return response;
	} catch (error) {
		throw new Error('Invalid credentials');
	}
}

export async function doSocialLogin(formData: FormData) {
	const action = formData.get('action') as string;
	await signIn(action, { redirectTo: '/dashboard' });
}

export async function doLogout() {
	await signOut({ redirectTo: '/' });
}
