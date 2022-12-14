import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/tasks/taskSlice";
import proyectReducer from "../features/proyect/proyectSlice";

export const store = configureStore({
  reducer: {
    tasks: taskReducer,
    proyects: proyectReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type UseSelectorTypes = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch