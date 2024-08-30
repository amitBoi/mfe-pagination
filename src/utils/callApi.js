import { HttpClient } from './httpClient';

const getCommonHeaders = () => {
  const commonHeaders = {
    'Content-Type': 'application/json',
    'cache-control': 'no-cache',
  };

  const token = sessionStorage.getItem('token');
  if (token) {
    commonHeaders.authorization = `Bearer ${token}`;
  }
};

export const callApi = async ({ apiDetails, data = null }) => {
  const { url, method = 'GET', isFullUrl = false, headers: requestHeaders = {} } = apiDetails;
  const httpClient = new HttpClient();
  const commonHeaders = getCommonHeaders();
  const headers = { ...commonHeaders, ...requestHeaders };

  //TODO: handle full and relative urls

  const response = await httpClient.request({
    url,
    method,
    headers,
    data,
  });

  return response.data;
};
