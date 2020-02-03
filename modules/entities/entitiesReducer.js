const INITIAL_STATE = {
  products: {
    // [id]: {product}
  },
  users: {
    // [id]: {user}
  },
};

export default function entitiesReducer(
  state = INITIAL_STATE,
  action,
) {
  if (action.payload && action.payload.entities) {
    return Object.keys(action.payload.entities).reduce(
      (accState, key) => {
        const entity = accState[key];

        accState[key] = Object.assign(
          {},
          entity,
          action.payload.entities[key],
        );

        return accState;
      },
      { ...state },
    );
  }
  return state;
}
