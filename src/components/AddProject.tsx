import React, { useState } from 'react';
import { firebase } from '../firebase';
import { generateUUID } from '../helpers';
import { useProjectsValue } from '../context';

export const AddProject = ({ shouldShow = false }) => {
  const [show, setShow] = useState(shouldShow);
  const [projectName, setProjectName] = useState('');

  const projectId = generateUUID();
  const { setProjects } = useProjectsValue();

  const addProject = () => {
    projectName &&
      firebase
        .firestore()
        .collection('projects')
        .add({ projectId, name: projectName, userId: 'JqzjtR0gxfcEyokb5yj6' })
        .then(() => {
          setProjects([]);
          setProjectName('');
          setShow(false);
        });
  };

  return (
    <div className="add-project" date-testid="add-project">
      {show && (
        <div className="add-project__input">
          <input
            type="text"
            value={projectName}
            onChange={e => setProjectName(e.target.value)}
            className="add-project__name"
            data-testid="project-name"
            placeholder="Name your"
          />

          <button
            type="button"
            className="add-project__submit"
            onClick={() => addProject()}
            data-testid="add-project-submit"
          >
            Add Project
          </button>

          <span
            data-testid="hide-project-overlay"
            className="add-project__cancel"
            onClick={() => setShow(false)}
          ></span>
        </div>
      )}
      <span className="add-project__plus">+</span>
      <span
        data-testid="add-project-action"
        className="add-project__text"
        onClick={() => setShow(!show)}
      ></span>
    </div>
  );
};
