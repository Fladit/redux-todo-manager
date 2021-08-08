import React from 'react';
import "./App.css"
import TodosList from "./components/TodoList/TodosList";
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
          <div className={"app"}>
              <TodosList/>
          </div>
      </Provider>
  );
}

export default App;
