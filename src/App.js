import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Provider store={store}>
      <h1>Hello World</h1>
      <TaskList />
    </Provider>
  );
}

export default App;
