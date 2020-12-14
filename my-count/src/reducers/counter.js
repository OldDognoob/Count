/* eslint-disable no-unused-vars */
/* eslint-disable import/no-anonymous-default-export */


//Step:1 Design the step needed for the application(slice of state)
const initialSate = {
  items: [
    {
      increment: "",
      decrement: "",
    },
  ],
};

//Step:3 Create a slice reducer per number of state
export default (state = { count: 0 }, action) => {
    switch (action.type) {
      case 'INCREMENT':
        return {
          count: state.count + 1
        }
      case 'DECREMENT':
        return {
          count: state.count - 1
        }
      default:
        return state
    }
  }
