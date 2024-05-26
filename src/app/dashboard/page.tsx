import { auth } from '@/auth';
import Logout from '@/components/Logout';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';

const page = async () => {
	const session = await auth();

	if (!session?.user) redirect('/');

	return (
		<main className='flex min-h-screen flex-col items-center justify-center gap-8 p-24'>
			<h1 className='text-3xl font-bold'>
				<Link
					href='/'
					className='text-blue-500 underline'>
					Home
				</Link>{' '}
				/ Dashboard
			</h1>
			<div className='flex flex-col items-center justify-center gap-4 p-4 border rounded w-full max-w-sm'>
				<Image
					src={session?.user?.image as string}
					alt={session?.user?.name as string}
					width={72}
					height={72}
					className='rounded-full'
				/>
				<h2 className='text-3xl font-bold'>{session?.user?.name}</h2>
				<Logout />
			</div>
		</main>
	);
};

export default page;
