'use server';

import { signIn, signOut } from '@/auth';

export async function doSocialLogin(formData: FormData) {
	const action = formData.get('action') as string;
	await signIn(action, { redirectTo: '/dashboard' });
}

export async function doSocialLogout() {
	await signOut({ redirectTo: '/' });
}
