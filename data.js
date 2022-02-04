const ROLE = {
  ADMIN: 'admin',
  BASIC: 'basic'
}

module.exports = {
	ROLE: ROLE,
	users: [
		{ id: 1, name: 'ebrima', role: ROLE.ADMIN },
		{ id: 2, name: 'mariama', role: ROLE.BASIC },
		{ id: 3, name: 'alieu', role: ROLE.BASIC },
	],
	projects: [
		{ id: 1, name: 'project of ebrima', userId: 1 },
		{ id: 2, name: 'project of mariama', userId: 2 },
		{ id: 3, name: 'project of alieu', userId: 3 },
	],
}