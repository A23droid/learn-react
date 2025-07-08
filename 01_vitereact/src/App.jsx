import Trial from './Trial'

function App() {
  const username = "aditya";
  return (
    <> {/*comment in jsx => fragment*/}
    <Trial />
    <p>inside a Fragment</p>
    <h1>Hello {username}</h1> {/* Inject var in jsx 
                          {username} is an evaluated expression*/}
    </>
  )
} 

export default App
