import { BrowserRouter as Router, Routes, Route, useLocation, matchPath } from "react-router-dom"
import './App.css'
import PageNotFound from "./pages/pagenotfound/PageNotFound"
import Home from "./pages/home/Home"
import Navbar from "./components/commonComponents/navbar/Navbar"
import Footer from "./components/commonComponents/footer/Footer"
import ContactUs from "./pages/contactus/ContactUs"
import Homepage_PropertyDetails from "./components/homepage_components/homepage_Propertydetails/Homepage_PropertyDetails"
// import About from "./pages/about/About"
import ScrollToTop from "./ScrollTop"
import Homepage_LocationDetails from "./components/homepage_components/homepage_locationsdetails/Homepage_LocationDetails"

function AppWrapper() {
  const location = useLocation();

  // Add routes here where Navbar should be hidden
  const hideNavbarRoutes = ['/property_LocationDetails/:id'];

  const shouldHideNavbar = hideNavbarRoutes.some((pattern) =>
    Boolean(matchPath(pattern, location.pathname))
  );

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/property_details/:id" element={<Homepage_PropertyDetails />} />
        <Route path="/property_LocationDetails/:id" element={<Homepage_LocationDetails />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App
