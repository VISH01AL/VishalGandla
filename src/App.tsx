
import { Routes,Route } from 'react-router-dom'
import Home from './Components/Core/Home'
import AcademicLife from './Components/SubComponents/AcademicLife'
import Career from './Components/SubComponents/Career'
import Projects from './Components/SubComponents/Projects'
import Contact from './Components/SubComponents/Contact'
import SkillSet from './Components/SubComponents/SkillSet'
function App() {
  return (
      <Routes>
        <Route path="/" element={<Home></Home>} ></Route>
        <Route path="/academiclife" element={<AcademicLife></AcademicLife>} ></Route>
        <Route path="/career" element={<Career></Career>} ></Route>
        <Route path='/projects' element={<Projects></Projects>}></Route>
        <Route path='/skillset' element={<SkillSet></SkillSet>}></Route>
        <Route path='/contact' element={<Contact></Contact>}></Route>
      </Routes>
  )
}

export default App
