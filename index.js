const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// actions identified
const INCREMENT = "increment";
const DECREMENT = "decrement";

// actions creations
const increment = (value) => {
  return {
    type: INCREMENT,
    payload: value,
  };
};

const deccrement = (value) => {
  return {
    type: DECREMENT,
    payload: value,
  };
};

const initialState = {
  value: 0,
};

const counterReducer = (state = initialState, action) => {
  if (action.type === INCREMENT) {
    return {
      ...state,
      value: state.value + action.payload,
    };
  } else if (action.type === DECREMENT) {
    return {
      ...state,
      value: state.value - action.payload,
    };
  } else {
    return state;
  }
};

const store = Redux.createStore(counterReducer);

const render = () => {
  const state = store.getState();
  counterEl.innerText = state.value.toString();
};
render();
store.subscribe(render);

// btn click event
incrementEl.addEventListener("click", () => {
  store.dispatch(increment(5));
});

decrementEl.addEventListener("click", () => {
  store.dispatch(deccrement(2));
});
