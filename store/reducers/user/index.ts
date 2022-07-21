import { UserState, UserAction } from './types'

const initialState: UserState = {
  name: 'Jone',
  count: 0
}

const reducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case 'SET_COUNT':
      return { ...state, count: action.payload }
    default:
      return state
  }
}

export default reducer