
import { useReducer } from 'react';
import Layout from './components/layout';
import { MyContext } from './context';
import Reducer from './store/reducer';
import { initialState } from './store/state';

function App() {
  const [state, dispatch] = useReducer(Reducer, initialState)
  return <div>
    <MyContext.Provider value={{state, dispatch}}>
      <Layout></Layout>
    </MyContext.Provider>
  </div>
}

export default App;
