// import degli elementi della libreria di gestione delle rotte
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Pages
import HomePage from "./pages/HomePage";
import DetailMovie from "./pages/DetailMovie";
import PaginaErrore from "./pages/PaginaErrore";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />} >
          <Route index element={<HomePage />} />
          <Route path=":id" element={<DetailMovie />} />
          {/* rotta del 404 per rotte non previste */}
          <Route path="*" element={<PaginaErrore />} />
          <Route path="/0" element={<PaginaErrore />} />
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
