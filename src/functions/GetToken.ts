import api from '@/api/api';
import { SetStoredToken } from '@/utils/Token';

export default async function GetToken() {
  const usernameAuth = import.meta.env.VITE_USERNAME_AUTH;
  const passwordAuth = import.meta.env.VITE_PASSWORD_AUTH;

  try {
    const response = await api.post(
      `${import.meta.env.VITE_URL_API}/login`,
      {
        username: usernameAuth,
        password: passwordAuth,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const accessToken = response.data.accessToken;
    SetStoredToken(accessToken);
    return accessToken;
  } catch (error) {
    throw new Error('Failed to get token');
  }
}
