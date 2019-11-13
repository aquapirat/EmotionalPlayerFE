import http from './http';

const ENDPOINTS = {
  MUSIC: '/music',
};

export default {
  getMusic() {
    return http.get(ENDPOINTS.MUSIC);
  },
};
