import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)


  // useEffect(() => {
  //     async function fetchData() {
  //       const result = await axios.get('http://app1-service/')
  //       console.log(result.data)
  //     }
  //     fetchData()
  // }, [])
  useEffect(() => {
  fetch("http://app1-service/")
    .then((res) => res.json())
    .then((data) => console.log("http://app1-service/" + "\n" + data))
  }, [])

  useEffect(() => {
  fetch("http://app1-service-clusterip/")
  .then((res) => res.json())
  .then((data) => console.log("http://app1-service-clusterip/" + "\n" + data))
}, [])

  useEffect(() => {
  fetch("http://10.68.4.158/")
  .then((res) => res.json())
  .then((data) => console.log("http://10.68.4.158/" + "\n" + data))
}, [])

// 34.135.184.100
useEffect(() => {
  fetch("http://34.135.184.100/")
  .then((res) => res.json())
  .then((data) => console.log("http://34.135.184.100/" + "\n" + data))
}, [])

// 34.135.184.100
// 10.68.4.158

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Test 4</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
