import axios from 'axios';
// import store from '@store/index';
// import { hideLoading, showLoading } from '@store/reducers/genericLoader';

export class HttpClient {
  constructor(config) {
    const { ...options } = config || {};
    this.http = axios.create(options);
  }

  request = (...args) => {
    // store.dispatch(showLoading());

    return this.http
      .request(...args)
      .then((response) => {
        // store.dispatch(hideLoading());
        return response;
      })
      .catch((err) => {
        // store.dispatch(hideLoading());
        return Promise.reject(err);
      });
  };
}
