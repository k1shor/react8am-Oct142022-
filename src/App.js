import React from "react";
import MyRoutes from "./MyRoutes";
import './App.css'
import './bootstrap.css'
import GlobalContextProvider from "./components/GlobalContext";
import { createStore } from "redux";
import counterReducer from "./components/redux-example/counterReducer";
import { Provider } from "react-redux";

function App() {


  const myStore = createStore(counterReducer)

  return (
    <>
    {/* <GlobalContextProvider> */}
    <Provider store={myStore}>
        <MyRoutes/>      
    </Provider>
    {/* </GlobalContextProvider> */}
    </>
  );
}

export default App;
