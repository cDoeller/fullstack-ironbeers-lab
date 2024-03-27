import { Route, Routes } from "react-router-dom"
import './App.css'
import BeersPage from "./pages/BeersPage"
import BeersDetailPage from "./pages/BeersDetailPage"
import NavBar from "./components/NavBar"
import CreateBeerPage from "./pages/CreateBeerPage"
import UpdateBeerPage from "./pages/UpdateBeerPage"
import RandomBeer from "./pages/RandomBeer"

function App() {

  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<BeersPage></BeersPage>}></Route>
        <Route path="/:id" element={<BeersDetailPage></BeersDetailPage>}></Route>
        <Route path="/create" element={<CreateBeerPage></CreateBeerPage>}></Route>
        <Route path="/random" element={<RandomBeer></RandomBeer>}></Route>
        <Route path="/:id/update" element={<UpdateBeerPage></UpdateBeerPage>}></Route>
      </Routes>
    </>
  )
}

export default App
