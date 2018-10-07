export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Make async call to database
    const firestore = getFirestore();
    firestore
      .collection('projects')
      .add({
        ...project,
        authorFirstName: 'The',
        authorLastName: 'Smyhk',
        authorId: 12345,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: 'CREATE_PROJECT', project: project });
      })
      .catch((err) => {
        dispatch({ type: 'CREATE_PROJECT_ERROR', err });
      });
  };
};
