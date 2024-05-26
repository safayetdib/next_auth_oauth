const users = [
	{
		email: 'a@a.com',
		password: 'atoa',
	},
	{
		email: 'b@b.com',
		password: 'btoa',
	},
	{
		email: 'c@c.com',
		password: 'ctoa',
	},
];

export const getUserByEmail = (email) =>
	users.find((user) => user.email === email) || null;
