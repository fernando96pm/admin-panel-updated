import { Route, Routes } from "react-router-dom"
import Sidebar from "./components/Sidebar"
import Login from "./pages/Login"
const App = () => {
  
  return (
  
  <Routes>
    <Route path="/" element={<Login />}/>  
    <Route path="/admin" element={<Sidebar />}/>
  </Routes>
  )
}
export default App