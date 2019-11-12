import { APPEND_MUSIC } from '../../constants/actions';

const initState = {};

const application = (app = initState, action) => {
  switch (action.type) {
    case APPEND_MUSIC:
      return app;
    default:
      return app;
  }
};

export default application;
