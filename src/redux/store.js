import { createStore } from 'redux';


const defaultState = {user:''};

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'user_login_success':
          return {...state,user:action.user}
        default:
          return state
      }
}

export default store = createStore(reducer);