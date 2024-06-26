import api from '@/api/api';
import { SetStoredToken } from '@/utils/Token';

export default async function GetToken() {
  const URLToGetToken = '/login';
  const usernameToAuth = import.meta.env.VITE_USERNAME_AUTH;
  const passwordToAuth = import.meta.env.VITE_PASSWORD_AUTH;

  try {
    const response = await api({
      method: 'POST',
      url: URLToGetToken,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username: usernameToAuth,
        password: passwordToAuth,
      },
    });

    const accessToken = response.data.accessToken;
    SetStoredToken(accessToken);
    return accessToken;
  } catch (error) {
    throw new Error('Failed to get token');
  }
}
