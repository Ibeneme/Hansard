import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "./assets/styling/beautify.css";
import ResearchCenter from "./Ikenna/pages/research/researchCenter";
import Funding from "./Ikenna/pages/research/funding";
import NotFound from "./Ikenna/pages/research/404";
import Careers from "./Ikenna/pages/research/Careers";
import LocationComponent from "./Ikenna/pages/maps/Location";
import MapAndContact from "./Ikenna/pages/maps/contact";
import CampusComponent from "./Ikenna/pages/maps/campus";
import ExpandingList from "./Ikenna/pages/information/StudentAffairs";
import Conferences from "./Ikenna/pages/information/Conferences";
import NoticeBoard from "./Ikenna/pages/information/NoticeBoard";
import FAQs from "./Ikenna/pages/information/FAQs";
import HensardFoundation from "./Ikenna/pages/information/Foundation";
import QuickLinks from "./Ikenna/pages/information/QuickLinks";
import StudentAffairs from "./Ikenna/pages/information/StudentAffairs";
import Depts from "./Ikenna/pages/information/Departments";
import Counselling from "./Ikenna/pages/information/Conselling";
import Journals from "./Ikenna/pages/information/Journals";
import Library from "./Ikenna/pages/information/Library";
import IkennaNews from "./Ikenna/pages/information/News";
import ComingSoon from "./Ikenna/pages/research/CominSoon";
import AcademicCalendar from "./Ikenna/pages/StudyOverview/AcademicCalendar";
import FoundationSchool from "./Ikenna/pages/StudyOverview/FoundationSchool";
import Staff from "./Ikenna/pages/StudyOverview/Staff";
import PostGraduate from "./Ikenna/pages/StudyOverview/PostGraduate";
import UnderGraduate from "./Ikenna/pages/StudyOverview/UnderGraduate";
import DepartmentDetail from "./Ikenna/pages/StudyOverview/DeptSpecific";
import Accomodation from "./Ikenna/pages/Admissions/Accomodation";
import Admissions from "./Ikenna/pages/Admissions/Admissions";
import ApplicationGuide from "./Ikenna/pages/Admissions/Applivation";
import CourseFinder from "./Ikenna/pages/Admissions/CourseFinder";
import Feeding from "./Ikenna/pages/Admissions/Feeding";
import SIWES from "./Ikenna/pages/Admissions/SIWES";
import Tuition from "./Ikenna/pages/Admissions/Tuition";
import AboutUni from "./Ikenna/pages/About/AboutUni";
import Board from "./Ikenna/pages/About/Board";
import DVC from "./Ikenna/pages/About/DVC";
import Gallery from "./Ikenna/pages/About/Gallery";
import HR from "./Ikenna/pages/About/HR";
import Magazine from "./Ikenna/pages/About/Magazine";
import Mgt from "./Ikenna/pages/About/Mgt";
import MOU from "./Ikenna/pages/About/MOU";
import Press from "./Ikenna/pages/About/Press";
import Registrar from "./Ikenna/pages/About/Registrar";
import Senate from "./Ikenna/pages/About/Senate";
import TheFounder from "./Ikenna/pages/About/TheFounder";
import TV from "./Ikenna/pages/About/TV";
import VC from "./Ikenna/pages/About/VC";
import Collaborate from "./Ikenna/pages/research/Collaborate";
import ResearchOne from "./Ikenna/pages/research/ResearchOne";
import ResearchTwo from "./Ikenna/pages/research/ResearchOnea";
import ResearchThree from "./Ikenna/pages/research/ResearchOneb";
import ResearchFour from "./Ikenna/pages/research/ResearchOnec";
import ResearchFive from "./Ikenna/pages/research/ResearchOned";
import ResearchSix from "./Ikenna/pages/research/ResearchOnee";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* research centers */}
          <Route path="/centre-and-research" element={<ResearchCenter />} />
          <Route path="/funding" element={<Funding />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/research-HCCLS" element={<ResearchOne />} />
          <Route path="/research-HCSTI" element={<ResearchTwo />} />{" "}
          <Route path="/research-HCECR" element={<ResearchThree />} />
          <Route path="/research-HCGER" element={<ResearchFour/>} />
          <Route path="/research-HCGL" element={<ResearchFive/>} />
          <Route path="/research-HCMIH" element={<ResearchSix/>} />
          {/* Contact Us */}
          <Route path="/maps" element={<MapAndContact />} />
          <Route path="/location" element={<LocationComponent />} />
          <Route path="/campus" element={<CampusComponent />} />
          {/* Information */}
          <Route path="/test" element={<ExpandingList />} />
          <Route path="/library" element={<Library />} />
          <Route path="/conferences" element={<Conferences />} />
          <Route path="/notice" element={<NoticeBoard />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/foundation" element={<HensardFoundation />} />
          <Route path="/quicklinks" element={<QuickLinks />} />
          <Route path="/studentaffairs" element={<StudentAffairs />} />
          <Route path="/departments" element={<Depts />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/journals" element={<Journals />} />
          <Route path="/news" element={<IkennaNews />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          {/* Study Overview */}
          <Route path="/academics" element={<AcademicCalendar />} />
          <Route path="/foundation-school" element={<FoundationSchool />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/post-graduate" element={<PostGraduate />} />
          <Route path="/department" element={<UnderGraduate />} />
          <Route path="/department/:id" element={<DepartmentDetail />} />
          {/* Admission */}
          <Route path="/accomodation" element={<Accomodation />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/application" element={<ApplicationGuide />} />
          <Route path="/course-finder" element={<CourseFinder />} />
          <Route path="/feeding" element={<Feeding />} />
          <Route path="/SIWES" element={<SIWES />} />
          <Route path="/tuition" element={<Tuition />} />
          {/* About */}
          <Route path="/about" element={<AboutUni />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/DVC" element={<DVC />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/hr" element={<HR />} />
          <Route path="/magazine" element={<Magazine />} />
          <Route path="/mgt" element={<Mgt />} />
          <Route path="/mou" element={<MOU />} />
          <Route path="/press" element={<Press />} />
          <Route path="/registrar" element={<Registrar />} />
          <Route path="/senate" element={<Senate />} />
          <Route path="/the-founder" element={<TheFounder />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/vc" element={<VC />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
