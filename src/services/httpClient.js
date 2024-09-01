import axios from 'axios';
import { useGenericLoader } from '@app/features/GenericLoader/genericLoader.slice';

export class HttpClient {
  constructor(config) {
    const { ...options } = config || {};
    this.http = axios.create(options);
  }

  request = (...args) => {
    useGenericLoader.getState().showLoader();

    return this.http
      .request(...args)
      .then((response) => {
        return response;
      })
      .catch((err) => {
        return Promise.reject(err);
      })
      .finally(() => {
        useGenericLoader.getState().hideLoader();
      });
  };
}
