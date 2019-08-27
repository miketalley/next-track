import { $http } from '@/utils/globals';

export const get = path => $http({
  method: 'GET',
  url: path
});

export const post = (path, data) => $http({
  method: 'POST',
  url: path,
  data
});

export default {
  get,
  post
};
