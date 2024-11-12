import React from 'react';
import { setFilter } from './redux/taskSlice';
import { useAppDispatch } from './redux/store';

const TaskFilter: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button onClick={() => dispatch(setFilter('all'))}>All</button>
      <button onClick={() => dispatch(setFilter('completed'))}>Completed</button>
      <button onClick={() => dispatch(setFilter('pending'))}>Uncompleted</button>
    </div>
  );
};

export default TaskFilter;
