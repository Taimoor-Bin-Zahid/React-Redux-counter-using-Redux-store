import './App.css';
import Counter from './Counter'
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './Redux/counterReducer';

const store = configureStore({
  reducer:  {
      counter: counterReducer
  }
})
function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <Counter />
      </Provider>
    </div>
  );
}

export default App;
