export const GetStoredToken = () => localStorage.getItem('accessToken');

export const SetStoredToken = (value: string) => localStorage.setItem('accessToken', value);

export const ClearStoredToken = () => localStorage.removeItem('accessToken');
