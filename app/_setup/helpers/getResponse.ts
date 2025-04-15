import {AxiosResponse} from 'axios';

export function getResponse<T>(
  response: PromiseSettledResult<AxiosResponse<T>>
) {
  return response.status === 'fulfilled' ? response.value.data : null;
}

export function getResponsePromise<T>(
  response: PromiseSettledResult<T>
) {
  return response.status === 'fulfilled' ? response.value : null;
}
