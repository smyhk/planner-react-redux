// Default state
const initState = {};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.info('created project: ', action.project);
      return state;
    case 'CREARTE_PROJECT_ERROR':
      console.info('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
