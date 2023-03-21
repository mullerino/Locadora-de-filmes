import  {Routes, Route} from "react-router-dom"
import Homepage from "./pages/Homepage"
import TelaPrincipal from "./pages/TelaPrincipal"

function App() {
  return (
    <Routes>
      <Route path="/" element = {<Homepage/>} />
      <Route path="list" element = {<TelaPrincipal/>}/>
    </Routes>
  )
}

export default App
