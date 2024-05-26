import { access } from 'fs';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import { getUserByEmail } from './data/users';

export const { handlers, signIn, signOut, auth } = NextAuth({
	session: {
		strategy: 'jwt',
	},
	providers: [
		CredentialsProvider({
			async authorize(credentials) {
				try {
					const user = getUserByEmail(credentials.email);
					if (user) {
						const isMatch = user?.password === credentials?.password;
						if (isMatch) {
							return user;
						} else {
							throw new Error('Invalid credentials');
						}
					} else {
						throw new Error('User not found');
					}
				} catch (error) {
					throw new Error(error);
				}
			},
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: 'consent',
					access_type: 'offline',
					response_type: 'code',
				},
			},
		}),
	],
});
