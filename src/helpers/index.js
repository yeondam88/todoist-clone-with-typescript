import { collatedTasks } from '../constants';

export const getTitle = (projects, projectId) =>
  projects.find(project => project.projectId === projectId);

export const getCollatedTitle = (projects, key) =>
  collatedTasks.find(project => project.key === key);

export const collatedTasksExist = selectedProject => {
  return collatedTasks.find(task => task.key === selectedProject);
};

export const generateUUID = () => {
  var d = new Date().getTime();
  var d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
};
