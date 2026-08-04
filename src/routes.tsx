// import Home from "./pages/Home";
// import { BrowserRouter, Routes, Route } from "react-router";
// import Shop from "./pages/Shop";
// import Header from "./components/ui/Header";
// import Course from "./pages/Course";
// import CourseDetailPage from "./pages/CourseDetail";
// import TeacherBerryPage from "./pages/instructorsPages/TrBerry";
// import SayarHtetWaiPage from "./pages/instructorsPages/SayarHtetWai";
// import Footer from "./components/ui/Footer";
// import AboutPage from "./pages/AboutUs";
// import ProfilePage from "./pages/Profile";
// import SayarKyawYePage from "./pages/instructorsPages/SayarKyawYe";
// import StamOrganization from "./pages/instructorsPages/StamOrganization";
// import SayarChanAyePage from "./pages/instructorsPages/SayarChanAye";
// import TeacherCherryMyaPage from "./pages/instructorsPages/TrCherryMya";
// import TeacherChoChoKha from "./pages/instructorsPages/TrChoChoKha";
// import SayarNayWinNaingPage from "./pages/instructorsPages/SayarNayWinNaing";
// import YuPage from "./pages/instructorsPages/yu";

// export default function RouterList() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/shop" element={<Shop />} />
//         <Route path="/courses" element={<Course />} />
//         // This must have /:id at the end!
//         <Route path="/course/:id" element={<CourseDetailPage />} />
//         <Route path="/instructors/berry" element={<TeacherBerryPage />} />
//         <Route path="/instructors/htetWai" element={<SayarHtetWaiPage />} />
//         <Route path="/instructors/kyawye" element={<SayarKyawYePage />} />
//         <Route path="/instructors/stam" element={<StamOrganization />} />
//         <Route path="/instructors/chanAye" element={<SayarChanAyePage />} />
//         <Route
//           path="/instructors/cherryMya"
//           element={<TeacherCherryMyaPage />}
//         />
//         <Route path="/instructors/choChoKha" element={<TeacherChoChoKha />} />
//         <Route
//           path="/instructors/nayWinNaing"
//           element={<SayarNayWinNaingPage />}
//         />
//         <Route path="/instructors/yu" element={<YuPage />} />
//         <Route path="/aboutus" element={<AboutPage />} />
//         <Route path="/profile" element={<ProfilePage />} />
//       </Routes>
//       <Footer />
//     </BrowserRouter>
//   );
// }

import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
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
import SayarChanAyePage from "./pages/instructorsPages/SayarChanAye";
import TeacherCherryMyaPage from "./pages/instructorsPages/TrCherryMya";
import TeacherChoChoKha from "./pages/instructorsPages/TrChoChoKha";
import SayarNayWinNaingPage from "./pages/instructorsPages/SayarNayWinNaing";
import YuPage from "./pages/instructorsPages/yu";

// Module & Detail Pages
import DataAnalysis from "./pages/detailspages/data-analysis";
import SingleCourseOption from "./pages/singleoption/data-analysis";

export default function RouterList() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/courses" element={<Course />} />

        {/* Data Analysis Main Specialization Page */}
        <Route path="/courses/data-analysis" element={<DataAnalysis />} />

        {/* Data Analysis Modular Single Selection Page */}
        <Route
          path="/courses/data-analysis/single"
          element={<SingleCourseOption />}
        />

        {/* Dynamic single course fallback path */}
        <Route path="/courses/:slug/single" element={<SingleCourseOption />} />

        <Route path="/course/:id" element={<CourseDetailPage />} />
        <Route path="/instructors/berry" element={<TeacherBerryPage />} />
        <Route path="/instructors/htetWai" element={<SayarHtetWaiPage />} />
        <Route path="/instructors/kyawye" element={<SayarKyawYePage />} />
        <Route path="/instructors/stam" element={<StamOrganization />} />
        <Route path="/instructors/chanAye" element={<SayarChanAyePage />} />
        <Route
          path="/instructors/cherryMya"
          element={<TeacherCherryMyaPage />}
        />
        <Route path="/instructors/choChoKha" element={<TeacherChoChoKha />} />
        <Route
          path="/instructors/nayWinNaing"
          element={<SayarNayWinNaingPage />}
        />
        <Route path="/instructors/yu" element={<YuPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
