import api from '@/api/api';

export default async function GetToken(usernameToAuth: string, passwordToAuth: string) {
  const URLToGetToken = '/login';

  try {
    const response = await api({
      method: 'POST',
      url: URLToGetToken,
      data: {
        username: usernameToAuth,
        password: passwordToAuth,
      },
    });

    const accessToken = response.data.accessToken;
    return accessToken;
  } catch (error) {
    throw new Error('Failed to get token');
  }
}
