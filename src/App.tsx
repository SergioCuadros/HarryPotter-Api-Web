import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CharacterView } from './components/CharacterView'
import { SpellsView } from './components/SpellsView'
import { HpView } from './components/HpView'
import { NavBar } from './components/NavBar'
import './App.css'

function App() {


  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/hp" element={<HpView />} />
          <Route path="/characters" element={<CharacterView />} />
          <Route path="/Spells" element={<SpellsView />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
