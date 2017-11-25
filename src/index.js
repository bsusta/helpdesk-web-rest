import React from 'react';
import ReactDOM from 'react-dom';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import createStore from './redux/store';
import Login from './components/login/login';

const store=createStore();
const App = () =>
(<Provider store={store}>
    <Login />
  </Provider>);

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
