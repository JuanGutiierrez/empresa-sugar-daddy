import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './documents/helpers/Header'
import Main from './documents/layouts/Main'
import Footer from './documents/helpers/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <section className="App">
      <Header />
      <Main />
      <Footer />
    </section>
  )
}

export default App
