import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import Products from "../pages/Products"
import DefaultLayout from "../layouts/DefaultLayout"
import "./App.jsx"
import Deatil from "./Deatil.jsx"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/deatil" element={<Deatil />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
