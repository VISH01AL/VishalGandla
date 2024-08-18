
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Core/Home'
import AcademicLife from './Components/SubComponents/AcademicLife'
import Career from './Components/SubComponents/Career'
import Projects from './Components/SubComponents/Projects'
import About from './Components/SubComponents/About'
import SkillSet from './Components/SubComponents/SkillSet'
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/academiclife" element={<AcademicLife></AcademicLife>} ></Route>
        <Route path="/career" element={<Career></Career>} ></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/skillset' element={<SkillSet></SkillSet>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
  )
}

export default App
