import { BrowserRouter, Routes, Route} from "react-router-dom"
import Menu from "./menu-bar/menu-bar"
import Home from "./Home-page/body"
import Footer from "./Footer/footer"

function App() {

  return (
    <>
     <BrowserRouter>
     <Menu/>
     <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
     <Footer/>
     </BrowserRouter>
    </>
  )
}

export default App
