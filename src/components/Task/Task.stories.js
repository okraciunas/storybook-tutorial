import React from "react";
import { action } from "@storybook/addon-actions";

import Task, { TaskState } from "./";

export default {
  component: Task,
  title: "Task",
  excludeStories: /.*Data$/,
};

export const taskData = {
  id: "1",
  title: "Test Task",
  state: TaskState.TASK_INBOX,
  updatedAt: new Date(2018, 0, 1, 9, 0),
};

export const actionsData = {
  onPinTask: action("onPinTask"),
  onArchiveTask: action("onArchiveTask"),
};

export const Default = () => <Task task={{ ...taskData }} {...actionsData} />;

export const Pinned = () => (
  <Task task={{ ...taskData, state: TaskState.TASK_PINNED }} {...actionsData} />
);

export const Archived = () => (
  <Task
    task={{ ...taskData, state: TaskState.TASK_ARCHIVED }}
    {...actionsData}
  />
);
