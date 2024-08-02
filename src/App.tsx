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
import Technology from "./components/Technology";
import HealthAndWellness from "./components/HealthAndWellness";
import Lifestyle from "./components/Lifestyle";
import Business from "./components/Business";
import Science from "./components/Science";
import Education from "./components/Education";
import Entertainment from "./components/Entertainment";
import Politics from "./components/Politics";
import Sports from "./components/Sports";
import FoodAndDrinks from "./components/FoodAndDrinks";
import { Culture } from "./components/Culture";
import Enviroment from "./components/Enviroment";
import Automotive from "./components/Automotive";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <Routes>
      <Route path="/recoverpassword" element={<Recoverpassword />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgotpassword" element={<Forgotpassword />} />
      <Route path="/register" element={<Register />} />
      <Route path="/createpassword" element={<CreatePassword />} />
      <Route path="profilepage" element={<Profilepage />} />

      <Route path="/articles/*" element={<MainLayout />}>
        <Route path="home" element={<Homepage />} />
        <Route path="profilepage" element={<Profilepage />} />
        <Route path="aboutus" element={<Aboutus />} />
        <Route path="Passwordverification" element={<Passwordverification />} />
        <Route
          path="individualarticlepage"
          element={<Individualarticlepage />}
        />
        <Route path="technology" element={<Technology />} />
        <Route path="healthandwellness" element={<HealthAndWellness />} />
        <Route path="lifestyle" element={<Lifestyle />} />
        <Route path="business" element={<Business />} />
        <Route path="science" element={<Science />} />
        <Route path="education" element={<Education />} />
        <Route path="entertainment" element={<Entertainment />} />
        <Route path="politics" element={<Politics />} />
        <Route path="sports" element={<Sports />} />
        <Route path="foodanddrinks" element={<FoodAndDrinks />} />
        <Route path="culture" element={<Culture />} />
        <Route path="environment" element={<Enviroment />} />
        <Route path="automotive" element={<Automotive />} />
        <Route path="contactus" element={<ContactUs />} />
      </Route>

      <Route path="/*" element={<Login />} />
    </Routes>
  );
}

export default App;
