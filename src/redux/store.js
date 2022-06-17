import {createStore} from 'redux'
import todoreducer from './reducers/todoReducers'
const store = createStore(todoreducer)
export default store