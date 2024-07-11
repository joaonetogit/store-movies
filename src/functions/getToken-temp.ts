import api from '@/api/api';

export default async function GetToken() {
  const URLToGetToken = '/login';

  try {
    const response = await api({
      method: 'POST',
      url: URLToGetToken,
    });

    const accessToken = response.data.accessToken;
    return accessToken;
  } catch (error) {
    throw new Error('Failed to get token');
  }
}
