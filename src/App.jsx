import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { AuthProvider } from "./context/authContext";
import FotoPage from "./pages/FotoPage";
import FotoFormPage from "./pages/FotoFormPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import Navbar from "./component/Navbar";
import SetingsProfile from "./pages/SetingsProfile";

import ProtectedRoute from "./ProtectedRoute";
import { FotoProvider } from "./context/FotoContext";

function App() {
  return (
    <AuthProvider>
      <FotoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />

            <Route element={<ProtectedRoute />}>
              <Route path="/fotos" element={<FotoPage />} />
              <Route path="/new-foto" element={<FotoFormPage />} />
              <Route path="/foto/:id" element={<FotoFormPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/seting-profile" element={<SetingsProfile/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </FotoProvider>
    </AuthProvider>
  );
}

export default App;
