import React, { useState } from 'react';
import { addTask } from './redux/taskSlice';
import { useAppDispatch } from './redux/store';

const TaskInput: React.FC = () => {
  const [title, setTitle] = useState('');
  const dispatch = useAppDispatch();

  const handleAddTask = () => {
    if (title.trim()) {
      dispatch(addTask(title));
      setTitle('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
