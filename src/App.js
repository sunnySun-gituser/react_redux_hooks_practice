import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import './App.css';
import allActions from './actions';

// useSelector: reducer
// useDispatch: action
// multiple reducers: useSelector
// one reducer: const currentUser = state.user
function App() {
  const counter = useSelector(state => state.counter)
  const currentUser = useSelector(state => state.currentUser)

  const dispatch = useDispatch()

  const user = {name: "Sunny"}

  // ,: to remember the useeffect does not run until the page is completely loaded
  // useEffect will be called after the page load ended
  // []: dependency: if user same, will not re-redender the component
  useEffect(() => {
    dispatch(allActions.userActions.setUser(user))
  }, [])

  console.log(currentUser)
  return !currentUser 
    ? <div><h1>Loading</h1></div>
    :(
    <div className="App">
      {
        currentUser.loggedIn
        ?
        <>
          <h1>Hello, {currentUser.user.name}</h1>
          <button className='button' onClick={() => dispatch(allActions.userActions.logOut())}>Logout</button>
        </>
        :
        <>
          <h1>Login</h1>
          <button className='button' onClick={() => dispatch(allActions.userActions.setUser(user))}>Login as {user.name}</button>
        </>
      }
      <h1>Counter: {counter}</h1>
      <button className='button' onClick={() => dispatch(allActions.counterActions.increment())}>Increment Counter</button>
      <button className='button' onClick={() => dispatch(allActions.counterActions.decrement())}>Decrement Counter</button>
    </div>
  );
}

export default App;
