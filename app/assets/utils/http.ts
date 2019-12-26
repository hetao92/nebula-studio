import { notification } from 'antd';
import axios from 'axios';

const service = axios.create();

service.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json';

  return config;
});

service.interceptors.response.use(
  (response: any) => {
    return response.data;
  },
  (error: any) => {
    console.log(error);
    notification.error({
      message: `Request error status: ${error.response.status}`,
      description: error.response.statusText,
    });
    return error.response;
  },
);

const get = (api: string) => (params?: object, config = {}) =>
  service.get(api, { params, ...config });

const post = (api: string) => (params?: object, config = {}) =>
  service.post(api, params, config);
const put = (api: string) => (params?: object, config = {}) =>
  service.put(api, params, config);

const _delete = (api: string) => (params?: object) =>
  service.delete(api, params);

export { get, post, put, _delete };
