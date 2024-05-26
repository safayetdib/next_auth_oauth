import LoginForm from '@/components/LoginForm';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-8 p-24'>
			<h1 className='text-3xl font-bold'>Next Auth Oauth</h1>
			<LoginForm />
		</main>
	);
}
