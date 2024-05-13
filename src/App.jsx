import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home/Home'
import SaltPages from './pages/SaltPages/SaltPages'

function App() {
  

  return (
    <div className='main'>
      <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/:saltName' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
