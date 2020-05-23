import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import Task, { TaskState } from "../Task";
import { archiveTask, pinTask } from "./../../store";

export function TaskList({ loading, tasks, onPinTask, onArchiveTask }) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    const LoadingRow = (
      <div className="loading-item">
        <span className="glow-checkbox" />
        <span className="glow-text">
          <span>Loading</span> <span>cool</span> <span>state</span>
        </span>
      </div>
    );

    return (
      <div className="list-items">
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
        {LoadingRow}
      </div>
    );
  }

  if (tasks.length === 0) {
    return (
      <div className="list-items">
        <div className="wrapper-message">
          <span className="icon-check" />
          <div className="title-message">You have no tasks</div>
          <div className="subtitle-message">Sit back and relax</div>
        </div>
      </div>
    );
  }

  const tasksInOrder = [
    ...tasks.filter((t) => t.state === TaskState.TASK_PINNED),
    ...tasks.filter((t) => t.state !== TaskState.TASK_PINNED),
  ];

  return (
    <div className="list-items">
      {tasksInOrder.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  loading: PropTypes.bool,
  tasks: PropTypes.arrayOf(Task.propTypes.task).isRequired,
  onPinTask: PropTypes.func.isRequired,
  onArchiveTask: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
  loading: false,
};

export default connect(
  ({ tasks }) => ({
    tasks: tasks.filter(
      (t) =>
        t.state === TaskState.TASK_INBOX || t.state === TaskState.TASK_PINNED
    ),
  }),
  (dispatch) => ({
    onArchiveTask: (id) => dispatch(archiveTask(id)),
    onPinTask: (id) => dispatch(pinTask(id)),
  })
)(TaskList);
