import { createBrowserRouter, redirect } from "react-router-dom";
import { About } from "./App/About/About";
import { App } from "./App/App";
import { Task } from "./App/Task/Task";
import { TaskCreate } from "./App/Task/TaskCreate/TaskCreate";
import { TaskEdit } from "./App/Task/TaskEdit/TaskEdit";
import { TaskList } from "./App/Task/TaskList/TaskList";


export const router = createBrowserRouter([
  {
    path: '',
    Component: App,
    children: [
      {
        path: 'tasks',
        Component: Task,
        children: [
          {
            path: 'create',
            Component: TaskCreate,
          },
          {
            path: ':id/edit',
            Component: TaskEdit,
          },
          {
            path: '',
            Component: TaskList,
          },
        ],
      },
      {
        path: 'about',
        Component: About,
      },
      {
        path: '',
        loader: () => redirect('/tasks'),
      },
    ],
  },
]);

export interface RoutingLink {
  label: string;
  to: string;
}

export const appRoutingLinks: RoutingLink[] = [
  { label: 'Tasks', to: '/tasks' },
  { label: 'About', to: '/about' },
];
