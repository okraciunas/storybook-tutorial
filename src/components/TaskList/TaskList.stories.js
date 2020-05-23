import React from "react";
import { Provider } from "react-redux";

import store from "./../../store";

import TaskList from "./";
import { TaskState } from "./../Task";
import { taskData, actionsData } from "./../Task/Task.stories";

export default {
  component: TaskList,
  title: "TaksList",
  decorators: [(story) => <div style={{ padding: "3rem" }}>{story()}</div>],
  excludeStories: /.*Data$/,
};

export const defaultTasksData = [
  { ...taskData, id: "1", title: "Task 1" },
  { ...taskData, id: "2", title: "Task 2" },
  { ...taskData, id: "3", title: "Task 3" },
  { ...taskData, id: "4", title: "Task 4" },
  { ...taskData, id: "5", title: "Task 5" },
  { ...taskData, id: "6", title: "Task 6" },
];

export const withPinnedTasksData = [
  ...defaultTasksData.slice(0, 5),
  { id: "6", title: "Task 6 (pinned)", state: TaskState.TASK_PINNED },
];

export const Default = () => (
  <Provider store={store}>
    <TaskList tasks={defaultTasksData} {...actionsData} />
  </Provider>
);

export const WithPinnedTasks = () => (
  <Provider store={store}>
    <TaskList tasks={withPinnedTasksData} {...actionsData} />
  </Provider>
);

export const Loading = () => (
  <Provider store={store}>
    <TaskList loading tasks={[]} {...actionsData} />;
  </Provider>
);

export const Empty = () => (
  <Provider store={store}>
    <TaskList tasks={[]} {...actionsData} />;
  </Provider>
);
