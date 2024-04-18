import './App.css'
import { Route, Routes } from 'react-router-dom'
import StartScene from './scenes/StartScene'

function App() {

  return (
    <Routes>
      <Route path='/' element={<StartScene/>} />
    </Routes>
  )
}

export default App
