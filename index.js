// index.js

// Action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_MATCH = "ADD_MATCH";
const DELETE_MATCH = "DELETE_MATCH";
const RESET = "RESET";

// Action creators
const increment = (index, value) => ({
  type: INCREMENT,
  payload: { index, value },
});

const decrement = (index, value) => ({
  type: DECREMENT,
  payload: { index, value },
});

const addMatch = () => ({
  type: ADD_MATCH,
});

const deleteMatch = (index) => ({
  type: DELETE_MATCH,
  payload: { index },
});

const reset = () => ({
  type: RESET,
});

// Initial state
const initialState = {
  matches: [{ score: 120 }],
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        matches: state.matches.map((match, idx) =>
          idx === action.payload.index
            ? { ...match, score: match.score + action.payload.value }
            : match
        ),
      };
    case DECREMENT:
      return {
        ...state,
        matches: state.matches.map((match, idx) =>
          idx === action.payload.index
            ? { ...match, score: match.score - action.payload.value }
            : match
        ),
      };
    case ADD_MATCH:
      return {
        ...state,
        matches: [...state.matches, { score: 0 }],
      };
    case DELETE_MATCH:
      return {
        ...state,
        matches: state.matches.filter((_, idx) => idx !== action.payload.index),
      };
    case RESET:
      return initialState;
    default:
      return state;
  }
};

// Create store
const store = Redux.createStore(reducer);

// Helper function to render the state
const render = () => {
  const state = store.getState();
  const matchesContainer = document.querySelector(".all-matches");
  matchesContainer.innerHTML = "";

  state.matches.forEach((match, index) => {
    const matchElement = document.createElement("div");
    matchElement.classList.add("match");

    matchElement.innerHTML = `
      <div class="wrapper">
        <button class="lws-delete" data-index="${index}">
          <img src="./image/delete.svg" alt="" />
        </button>
        <h3 class="lws-matchName">Match ${index + 1}</h3>
      </div>
      <div class="inc-dec">
        <form class="incrementForm" data-index="${index}">
          <h4>Increment</h4>
          <input type="number" name="increment" class="lws-increment" />
        </form>
        <form class="decrementForm" data-index="${index}">
          <h4>Decrement</h4>
          <input type="number" name="decrement" class="lws-decrement" />
        </form>
      </div>
      <div class="numbers">
        <h2 class="lws-singleResult">${match.score}</h2>
      </div>
    `;

    matchesContainer.appendChild(matchElement);
  });
};

// Subscribe to store updates
store.subscribe(render);

// Event listeners
document.body.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const index = parseInt(form.dataset.index, 10);
  const value = parseInt(form.querySelector("input").value, 10);

  if (form.classList.contains("incrementForm")) {
    store.dispatch(increment(index, value));
  } else if (form.classList.contains("decrementForm")) {
    store.dispatch(decrement(index, value));
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.closest(".lws-delete")) {
    const index = parseInt(e.target.closest(".lws-delete").dataset.index, 10);
    store.dispatch(deleteMatch(index));
  } else if (e.target.closest(".lws-addMatch")) {
    store.dispatch(addMatch());
  } else if (e.target.closest(".lws-reset")) {
    store.dispatch(reset());
  }
});

// Initial render
render();
