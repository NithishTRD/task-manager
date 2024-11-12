import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './taskSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Typed dispatch for use in components
export const useAppDispatch = () => useDispatch<AppDispatch>();