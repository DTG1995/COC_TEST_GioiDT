import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app.jsx";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./shared/reducers/index.js";

const store = createStore(rootReducer);

const rootEl = document.getElementById('root');

ReactDOM.render(
  <>
    <Provider store={store}>
      <App/>
    </Provider>
  </>,
  rootEl
);