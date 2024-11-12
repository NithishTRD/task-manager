import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Task } from '../types';

interface TaskState {
  tasks: Task[];
  filter: 'all' | 'completed' | 'pending';
}

const initialState: TaskState = {
  tasks: [],
  filter: 'all',
};

const API_URL = 'http://localhost:3001/tasks';

let taskIdCounter = 1;

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  const response = await axios.get(API_URL);
  return response.data as Task[];
});

export const addTask = createAsyncThunk('tasks/addTask', async (title: string) => {
  const newTask = { id: String(taskIdCounter++), title, completed: false };
  await axios.post(API_URL, newTask);
  return newTask;
});

export const deleteTask = createAsyncThunk('tasks/deleteTask', async (id: string) => {
  await axios.delete(`${API_URL}/${id}`);
  console.log(id);
  return id;
});

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    toggleTaskCompletion: (state, action: PayloadAction<string>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) task.completed = !task.completed;
    },
    setFilter: (state, action: PayloadAction<TaskState['filter']>) => {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      });
  },
});

export const { toggleTaskCompletion, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
