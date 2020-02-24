export interface Task {
  id: number;
  task: string;
  userId: string;
  date: string;
  archived: boolean;
}

export interface CollatedTask {
  key: string;
  name: string;
}
