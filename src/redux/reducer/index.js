const initialState = {
  pokemons: [],
};

export default function rootReducer(state = initialState, { type, payload }) {
  switch (type) {
    case "GET_ALL_POKEMONS":
      return {
        ...state,
        pokemons: payload,
      };
      
    default:
      return {...state};
  }
}
