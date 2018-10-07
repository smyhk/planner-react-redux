// Default state
const initState = {
  projects: [
    { id: '1', title: 'help me find peach', content: 'blah blah blah' },
    { id: '2', title: 'collect all the stars', content: 'blah blah blah' },
    { id: '3', title: 'egg hunt with yoshi', content: 'blah blah blah' }
  ]
};

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
