import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, useAppDispatch } from './redux/store';
import { deleteTask, toggleTaskCompletion } from './redux/taskSlice';

const TaskList: React.FC = () => {
  const { tasks, filter } = useSelector((state: RootState) => state.tasks);
  const dispatch = useAppDispatch();

  const filteredTasks = tasks.filter(task =>
    filter === 'all' ? true : filter === 'completed' ? task.completed : !task.completed
  );

  return (
    <ul className="task-list">
      {filteredTasks.map(task => (
        <li key={task.id} className="task-item">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch(toggleTaskCompletion(task.id))}
          />
          {task.title}
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
