import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router";
import Shop from "./pages/Shop";
import Header from "./components/ui/Header";
import Course from "./pages/Course";
import CourseDetailPage from "./pages/CourseDetail";
import TeacherBerryPage from "./pages/instructorsPages/TrBerry";
import SayarHtetWaiPage from "./pages/instructorsPages/SayarHtetWai";
import Footer from "./components/ui/Footer";
import AboutPage from "./pages/AboutUs";
import ProfilePage from "./pages/Profile";
import SayarKyawYePage from "./pages/instructorsPages/SayarKyawYe";
import StamOrganization from "./pages/instructorsPages/StamOrganization";

export default function RouterList() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/courses" element={<Course />} />
        // This must have /:id at the end!
        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/instructors/berry" element={<TeacherBerryPage />} />
        <Route path="/instructors/htetwai" element={<SayarHtetWaiPage />} />
        <Route path="/instructors/kyawye" element={<SayarKyawYePage />} />
        <Route path="/instructors/stam" element={<StamOrganization />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
