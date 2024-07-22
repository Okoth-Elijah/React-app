import Login from "./Pages/login";
import Register from "./Pages/register";
import Recoverpassword from "./Pages/recoverpassword";
import Forgotpassword from "./Pages/forgotpassword";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Aboutus from "./components/aboutus";
import Individualarticlepage from "./Pages/individualarticlepage";
import Passwordverification from "./Pages/Passwordverification";
import Profilepage from "./Pages/profilepage";
import Homepage from "./Pages/homepage";
import CreatePassword from "./components/CreatePassword";
import FooterPage from "./Pages/FooterPage";
import ContactUs from "./Pages/ContactUs";
import FuturedArticles from "./Pages/FuturedArticles";
import Technology from "./components/Technology";

function App() {
  return (
    <Routes>
      <Route path="/recoverpassword" element={<Recoverpassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<Forgotpassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/createpassword" element={<CreatePassword />} />
      <Route path="futuredarticles" element={<FuturedArticles />} />

      <Route path="/articles/*" element={<MainLayout />}>
        <Route path="home" element={<Homepage />} />
        <Route path="profilepage" element={<Profilepage />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="Passwordverification" element={<Passwordverification />} />
        <Route
          path="individualarticlepage"
          element={<Individualarticlepage />}
        />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="technology" element={<Technology />} />
      </Route>
      <Route path="footerpage" element={<FooterPage />} />
      <Route path="/*" element={<Login />} />
    </Routes>
  );
}

export default App;
