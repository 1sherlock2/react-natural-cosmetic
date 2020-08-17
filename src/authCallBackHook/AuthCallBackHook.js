import { storageName } from './ConstantValues';

export const useAuth = {
	login: (token, userId, right) => {
		return localStorage.setItem(storageName, JSON.stringify({ token, userId, right }));
	},
	logout: () => {
		return localStorage.removeItem(storageName);
	}
};
