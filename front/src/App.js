import React from 'react'
import { Provider } from 'react-redux'; 
import { AppRouter } from '../src/Routes/AppRouter'; 
import { store } from './Store/Store';

const App = () => {
  

  return (
    <Provider store={store}>
      <AppRouter />
      {/* <h3>{response}</h3> */}
    </Provider>
  )
}

export default App
