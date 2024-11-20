import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Bonjour from "./components/Bonjour.jsx";

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

    const books = [
        {
            id: 1,
            label: "book1"
        },
        {
            id: 2,
            label: "book1"
        },
        {
            id: 3,
            label: "book1"
        },
        {
            id: 4,
            label: "book1"
        },
        {
            id: 5,
            label: "book1"
        }
    ]


  return (
    <>
      <h1>Vite + React</h1>
        <Bonjour name={name} setName={setName}/>
        <ul>
            {books.map(book => (
                <li key={book.id}>{book.label}</li>
            ))}
        </ul>

        <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
