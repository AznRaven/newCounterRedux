const initialState = { counters: [] };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COUNTER":
      return {
        ...state,
        counters: [...state.counters, { id: action.id, value: 0,name: action.name }],
      };
    case "REMOVE_COUNTER":
      return {
        ...state,
        counters: state.counters.filter((counter) => counter.id !== action.id),
      };
    case "INCREMENT":
      const updatedCounters = state.counters.map((counter) =>
        counter.id === action.id
          ? { ...counter, value: counter.value + 1 }
          : counter
      );
      return { ...state, counters: updatedCounters };
    case "DECREMENT":
      const decrementedCounters = state.counters.map((counter) =>
        counter.id === action.id
          ? { ...counter, value: counter.value - 1 }
          : counter
      );
      return { ...state, counters: decrementedCounters };
    case "RESET":
      const resetCounters = state.counters.map((counter) =>
        counter.id === action.id ? { ...counter, value: 0 } : counter
      );
      return { ...state, counters: resetCounters };
    default:
      return state;
  }
};

export default counterReducer;
