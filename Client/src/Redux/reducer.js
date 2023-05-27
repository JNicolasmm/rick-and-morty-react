const initialState = {
  myFavorites: [],
  allCharacters: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_FAV':
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
      }

    case 'REMOVE_FAV':
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload
      }

    case 'FILTER':
      return {
        ...state,
        myFavorites: state.allCharacters.filter(char => char.gender === action.payload)
      }

    case 'ORDER':
      if (action.payload === 'A') {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) => a.id - b.id)
        }
      } else {
        return {
          ...state,
          myFavorites: state.allCharacters.sort((a, b) => b.id - a.id)
        }
      }

    default: return { ...state }
  }
}

export default reducer