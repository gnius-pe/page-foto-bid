import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "./pages/LoginPage"
import RegisterPage from "./pages/RegisterPage"
import { AuthProvider } from "./context/authContext"
import FotoPage from "./pages/FotoPage"
import FotoFormPage from "./pages/fotoFormPage"
import ProfilePage from "./pages/ProfilePage"
import HomePage from "./pages/HomePage"

import ProtectedRoute from "./ProtectedRoute"

function App() {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>

          <Route element={<ProtectedRoute/>}>
            <Route path="/fotos" element={<FotoPage/>}/>
            <Route path="/add-fotos" element={<FotoFormPage/>}/>
            <Route path="/foto/:id" element={<FotoFormPage/>}/>
            <Route path="/profile" element={<ProfilePage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
