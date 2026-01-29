import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./Nav"
import Home from "../pages/Home"
import About from "../pages/About"
import Products from "../pages/Products"
import DefaultLayout from "../layouts/DefaultLayout"
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout></DefaultLayout>}></Route>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
