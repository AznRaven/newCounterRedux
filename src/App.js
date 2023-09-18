import "./App.css";
import store from "./service/Store";
import { Provider } from 'react-redux';
import CounterList from "./service/CounterList";


function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <CounterList />
      </Provider>
    </div>
  );
}

export default App;
