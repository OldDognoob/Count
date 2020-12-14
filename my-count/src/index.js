import React from "react";
import { render } from 'react-dom'

import { Provider } from "react-redux";
import { createStore } from "redux";

import counter from "./reducers/counter";
import Counter from "./components/Counter";

//STEP 5 Use createStore from REDUX to create a state store
const store = createStore(counter);
console.log(store.getState());

//STEP 6 wrap the application with a Provider from React-Redux
render(
    <Provider store={createStore(counter)}>
      <Counter />
    </Provider>,
    document.querySelector('#root')
  )
