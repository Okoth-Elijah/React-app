import Login from "./Pages/login";
import Register from "./Pages/register";
import Recoverpassword from "./Pages/recoverpassword";
import Forgotpassword from "./Pages/forgotpassword";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Aboutus from "./components/aboutus";
import Individualarticlepage from "./Pages/individualarticlepage";
import Passwordverification from "./Pages/Passwordverification";
import Profilepage from "./Pages/profilepage";
import Homepage from "./Pages/homepage";
import CreatePassword from "./components/CreatePassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/recoverpassword" element={<Recoverpassword />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/createpassword" element={<CreatePassword />} />

        <Route path="/articles/*" element={<MainLayout />}>
          <Route path="home" element={<Homepage />} />
          <Route path="profilepage" element={<Profilepage />} />
          <Route path="aboutus" element={<Aboutus />} />
          <Route
            path="Passwordverification"
            element={<Passwordverification />}
          />
          <Route
            path="individualarticlepage"
            element={<Individualarticlepage />}
          />
        </Route>

        <Route path="/*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
