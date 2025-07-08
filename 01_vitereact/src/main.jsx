import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <div>
      <h1>My app, my function, my react</h1>
    </div>
  )
  // console.log("hello");
  
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
// }

const anotherUser = 'AP';

const reactElement = React.createElement(
  'a', // Type
  { // Prop object
    href: 'https://www.google.com',
    target: '_blank'
  },
  'Visit Google', // Text to be shown 
  anotherUser // Variables
)

const anotherElement = (
  <a href="https://google.com" target = '_blank'>Visit google</a>
)

createRoot(document.getElementById('root')).render(
    // <ReactElement /> // it's like using ReactElement(), which you
                      // can't, as it's an Obj, not func

    // ReactElement // This is how would you call obj

    // anotherElement // React render accepts this
    reactElement // React render accepts this

    // "Objects are not valid as a React child" because for
    // custom react, we made a custom render function, but this
    // function is given to us by react itself, so we don't know
    // what parameters it expects and given this error message,
    // it definitely doesn't expect an object we gave.

    // <App />
    // can aso do MyApp() as it's a func and react is based in JS
)
