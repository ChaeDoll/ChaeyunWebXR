import './App.css'
import { Route, Routes } from 'react-router-dom'
import StartScene from './scenes/StartScene'
import PhysicsTestScene from './scenes/PhysicsTestScene'

function App() {

  return (
    <Routes>
      <Route path='/' element={<StartScene/>} />
      <Route path='/physics' element={<PhysicsTestScene/>} />
    </Routes>
  )
}

export default App
