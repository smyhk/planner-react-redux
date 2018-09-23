import React from 'react';

const ProjectDetails = (props) => {
  console.info(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            fugit, nisi, amet non accusamus necessitatibus officia omnis dolore
            itaque adipisci consequuntur, sed magni maxime! Porro veniam
            distinctio vitae fugit quidem.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by The Smyhk</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
