import { useParams, Link } from "react-router";
import DataAnalysis from "./detailspages/data-analysis";
import GedCoursePage from "./detailspages/ged";
import MicrosoftFundamentalsPage from "./detailspages/micorsoftFundamental";
import MernStack from "./detailspages/mern";
import FoundationComputerScience from "./detailspages/foundationCS";
import MathematicsComputerScience from "./detailspages/mathCS";
import Djmarket from "./detailspages/digitalmarketing";
import Marketing from "./detailspages/intromarket";
import Startup from "./detailspages/startup";
import Adobe from "./detailspages/adobe";
import UiUx from "./detailspages/uiux";
import MobileApp from "./detailspages/mobileApp";
import DataScience from "./detailspages/data-science";
import AiIntro from "./detailspages/ai";
import AiForBusiness from "./detailspages/aiForBusiness";
import EnglishForPsychologyPage from "./detailspages/ygn";
import BrandingManagementPage from "./detailspages/branding";
import GraphicDesignFundamentalsPage from "./detailspages/graphic";
import DuolingoPrepPage from "./detailspages/duolingo";
import SellingTechniquePage from "./detailspages/selling";
import CookingBurmaPage from "./detailspages/burma";
import CookingBusyPeoplePage from "./detailspages/busy";
import CookingBurmeseHousewifePage from "./detailspages/housewife";
import UltimateDailyMakeupPage from "./detailspages/dailymakeup";
import NailArtStylingPage from "./detailspages/nailart";
import BasicComputerCoursePage from "./detailspages/basic-computer";
import HumanPsychologyPage from "./detailspages/human";
import MachineLearning from "./detailspages/machinelearning";

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const courseId = Number(id);

  // ID Switcher to map each ID to its own single code file
  switch (courseId) {
    case 1:
      return <DataAnalysis />;
    case 2:
      return <GedCoursePage />;
    case 3:
      return <MernStack />;
    case 4:
      return <EnglishForPsychologyPage />;
    case 5:
      return <FoundationComputerScience />;
    case 6:
      return <MathematicsComputerScience />;
    case 7:
      return <BrandingManagementPage />;
    case 8:
      return <Djmarket />;
    case 9:
      return <Marketing />;
    case 10:
      return <Startup />;
    case 11:
      return <Adobe />;
    case 12:
      return <UiUx />;
    case 13:
      return <GraphicDesignFundamentalsPage />;
    case 14:
      return <MobileApp />;
    case 15:
      return <DataScience />;
    case 17:
      return <DuolingoPrepPage />;
    case 18:
      return <SellingTechniquePage />;
    case 19:
      return <CookingBurmaPage />;
    case 20:
      return <CookingBusyPeoplePage />;
    case 21:
      return <CookingBurmeseHousewifePage />;
    case 22:
      return <AiIntro />;
    case 23:
      return <AiForBusiness />;
    case 24:
      return <MachineLearning />;
    case 25:
      return <UltimateDailyMakeupPage />;
    case 26:
      return <NailArtStylingPage />;
    case 27:
      return <BasicComputerCoursePage />;
    case 28:
      return <HumanPsychologyPage />;
    case 29:
      return <MicrosoftFundamentalsPage />;

    // As you build new pages, add them here:
    // case 3:
    //   return <MernStackPage />;
    default:
      return (
        <div className="container mx-auto space-y-4 px-6 py-20 text-center">
          <h2 className="text-2xl font-black text-gray-950">
            Course Page Coming Soon
          </h2>
          <p className="text-sm text-gray-500">
            The layout for Course ID #{courseId} is currently under development.
          </p>
          <Link
            to="/courses"
            className="inline-block text-sm font-bold text-emerald-600 underline"
          >
            Back to Courses
          </Link>
        </div>
      );
  }
}
