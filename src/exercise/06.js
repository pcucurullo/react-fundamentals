// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  // 🐨 add a submit event handler here (`handleSubmit`).
  // 💰 Make sure to accept the `event` as an argument and call
  // `event.preventDefault()` to prevent the default behavior of form submit
  // events (which refreshes the page).
  //
  // 🐨 get the value from the username input (using whichever method
  // you prefer from the options mentioned in the instructions)
  // 💰 For example: event.target.elements[0].value
  // 🐨 Call `onSubmitUsername` with the value of the input

  // 🐨 add the onSubmit handler to the <form> below

  // 🐨 make sure to associate the label to the input.
  // to do so, set the value of 'htmlFor' prop of the label to the id of input

  const usernameInput = React.useRef();
  const [error, setError] = React.useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmitUsername(usernameInput.current.value);
  }

  const handleChange = (event) => {
    const value = event.target.value;
    const isValid = value === value.toLowerCase();
    setError(isValid ? null : 'Username must be lower case');
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={usernameInput} onChange={handleChange}/>
      </div>
      <p style={{color: 'red'}} role="alert">{error}</p>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App

/*
Access form elements via event.target.elements
The event we receive in the submit handler is synthetic, but contains the nativeEvent.
Associating labels to the actual input is necessary for screen readers.
useRef creates an immutable object that saves in current the DOM element itself which is maintained throughout the lifetime of the rendered element. It will be associated to a DOM element via the ref property
useState creates a state object that can be manipulated live.
When using a non-boolean as conditional to show/hide or enable/disable parse with Boolean() to be safe.
* */