import React, { useEffect } from 'react';
import { fetchTasks } from './redux/taskSlice';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import { useAppDispatch } from './redux/store';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('Fetching tasks...');
    dispatch(fetchTasks());
  }, [dispatch]);

  console.log('Rendering App component...');

  return (
    <div className="container">
      <h1 className="add-task">Task Manager</h1>
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>
  );
};

export default App;
