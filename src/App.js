import './App.css';
import TodoCom from './components/TodoCom';
import {Provider} from 'react-redux';
import store from './redux/store';

function App() {
  return (
   <Provider store={store}>
       <div className="App">
       <TodoCom/>
    </div>
   </Provider>
  );
}

export default App;
