import PyImg from "@/assets/Data ANalysis.avif";
import GedImg from "@/assets/GED.png";
import MernImg from "@/assets/MERN.webp";
import YuImg from "@/assets/YU.jpg";
import CsImg from "@/assets/CsImg.jpg";
import McsImg from "@/assets/Math.jpg";
import BrImg from "@/assets/brand.jpg";
import DiImg from "@/assets/digital.jpg";
import MaImg from "@/assets/market.jpg";
import StImg from "@/assets/startup.jpg";
import AdImg from "@/assets/adobe.jpg";
import UuxImg from "@/assets/Ui.jpg";
import GfImg from "@/assets/Graphic.jpg";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";

import MfImg from "@/assets/andriod.jpg";
import DsImg from "@/assets/datascience.jpg";
import SaImg from "@/assets/sat.jpg";
import DuImg from "@/assets/duolingo.jpg";
import SeImg from "@/assets/selling.jpg";
import CbImg from "@/assets/burmafood.jpg";
import BcImg from "@/assets/busyfood.jpg";
import HcImg from "@/assets/housewife.jpg";
import AiImg from "@/assets/ai.jpg";
import AbImg from "@/assets/aibusiness.jpg";
import MlImg from "@/assets/machine.jpg";
import MuImg from "@/assets/makeup.jpg";
import NaImg from "@/assets/nailart.jpg";
import KcImg from "@/assets/kmbasic.jpg";
import HsImg from "@/assets/human.jpg";
import MsImg from "@/assets/microsoft.jpg";

const popularCourses = [
  {
    id: 1,
    title: "Data Analysis with Python",
    category: ["Computer Science", "Information Technology"],
    instructor: "Sayar Htet Wai",
    duration: "8 months",
    level: "Beginner",
    image: PyImg,
  },
  {
    id: 2,
    title: "GED For Everybody",
    category: ["Academic"],
    instructor: "Tr. Berry ",
    duration: "4 months",
    level: "Beginner",
    image: GedImg,
  },
  {
    id: 3,
    title: "MERN Full-stack Developer",
    category: ["Computer Science", "Information Technology"],
    instructor: "Sayar Kyaw Ye + Assistant teachers",
    duration: "8 months",
    level: "Basic to Adv",
    image: MernImg,
  },

  {
    id: 4,
    title: " English for Psychology",
    category: ["Short-Course"],
    instructor: "Yangon University",
    duration: "2 months",
    level: "Beginner",
    image: YuImg,
  },

  {
    id: 5,
    title: "Foundation For Computer Science",
    category: ["Computer Science"],
    instructor: "Sayar Htet Wai",
    duration: "2 months",
    level: "Beginner",
    image: CsImg,
  },

  {
    id: 6,
    title: "Mathematics For Computer Science",
    category: ["Computer Science", "Academic"],
    instructor: "Sayar Htet Wai",
    duration: "3 months",
    level: "Beginner",
    image: McsImg,
  },

  {
    id: 7,
    title: "Branding Management",
    category: ["Business"],
    instructor: "Tr Cherry Mya",
    duration: "1.5 months",
    level: "Beginner",
    image: BrImg,
  },

  {
    id: 8,
    title: "Digital Marketing Strategy",
    category: ["Business", "Information Technology"],
    instructor: "Sayar Chan Aye",
    duration: "3 months",
    level: "Intermediate",
    image: DiImg,
  },

  {
    id: 9,
    title: "Introduction to Marketing",
    category: ["Business"],
    instructor: "Tr Cherry Mya",
    duration: "3.5 months",
    level: "Basic to Inter",
    image: MaImg,
  },

  {
    id: 10,
    title: "Startup Enterpreneurship",
    category: ["Business"],
    instructor: "Tr Cho Cho Kha",
    duration: "3.5 months",
    level: "Basic",
    image: StImg,
  },

  {
    id: 11,
    title: "Design with Adobe Package",
    category: "Design",
    instructor: "Stam Organization",
    duration: "6 months",
    level: "Basic to Inter",
    image: AdImg,
  },

  {
    id: 12,
    title: "Mastering UI/UX",
    category: "Design",
    instructor: "Stam Organization",
    duration: "8 months",
    level: "Basic to Adv",
    image: UuxImg,
  },

  {
    id: 13,
    title: "Graphic Design Fundamentals",
    category: ["Design", "Short-Course"],
    instructor: "Sr Chan Aye",
    duration: "1.5 months",
    level: "Baginner",
    image: GfImg,
  },

  {
    id: 14,
    title: "Mobile App Developer",
    category: ["Computer Science", "Information Technology"],
    instructor: "Sr Nay Win Naing",
    duration: "8 months",
    level: "Basic to Adv",
    image: MfImg,
  },

  {
    id: 15,
    title: "Data Science Specilization",
    category: ["Computer Science", "Information Technology"],
    instructor: "Sr Htet Wai",
    duration: "8 months",
    level: "Int to Adv",
    image: DsImg,
  },

  {
    id: 16,
    title: "Digital SAT",
    category: ["Academic"],
    instructor: "Tr Marry Aung",
    duration: "3 months",
    level: "Exam Ready",
    image: SaImg,
  },

  {
    id: 17,
    title: "Duolingo Exam Preparation",
    category: ["Academic", "Short-Course"],
    instructor: "Tr Marry Aung",
    duration: "1.5 months",
    level: "Exam Ready",
    image: DuImg,
  },

  {
    id: 18,
    title: "Selling Technique for 21st century",
    category: ["Short-Course", "Business"],
    instructor: "Sayar Chan Aye",
    duration: "1 months",
    level: "Beginner",
    image: SeImg,
  },

  {
    id: 19,
    title: "Cooking Burma Traditional Food",
    category: "Cooking",
    instructor: "Tr Wai",
    duration: "1 months",
    level: "Beginner",
    image: CbImg,
  },

  {
    id: 20,
    title: "Cooking for Busy People",
    category: "Cooking",
    instructor: "Tr Wai",
    duration: "1 months",
    level: "Beginner",
    image: BcImg,
  },

  {
    id: 21,
    title: "Cooking Guide for Burmese Housewife",
    category: "Cooking",
    instructor: "Tr Wai",
    duration: "1 months",
    level: "Beginner",
    image: HcImg,
  },

  {
    id: 22,
    title: "Artificial Intelligence Introduction(AI)",
    category: ["AI", "Information Technology"],
    instructor: "Stam Organization",
    duration: "2 months",
    level: "Beginner",
    image: AiImg,
  },

  {
    id: 23,
    title: "AI Integration for Business",
    category: ["AI", "Information Technology"],
    instructor: "Stam Organization",
    duration: "2 months",
    level: "Basic to Inter",
    image: AbImg,
  },

  {
    id: 24,
    title: "Machine Learning Specilization",
    category: ["AI", "Information Technology"],
    instructor: "Sayar Htet Wai",
    duration: "8 months",
    level: "Inter to Adv",
    image: MlImg,
  },

  {
    id: 25,
    title: "The Ultimate Daily Makeup",
    category: "Beauty",
    instructor: "Hanny Phyu (Hanny Vlog)",
    duration: "1 months",
    level: "Beginner",
    image: MuImg,
  },

  {
    id: 26,
    title: "Nail Art Styling",
    category: "Beauty",
    instructor: "Hanny Phyu (Hanny Vlog)",
    duration: "1 months",
    level: "Beginner",
    image: NaImg,
  },

  {
    id: 27,
    title: "Basic Computer Course",
    category: ["Short-Course", "Infomation Technology"],
    instructor: "MMC College",
    duration: "2 months",
    level: "Beginner",
    image: KcImg,
  },

  {
    id: 28,
    title: "Human Psychology",
    category: "Short-Course",
    instructor: "Dr Kaung Zaw",
    duration: "1 months",
    level: "Beginner",
    image: HsImg,
  },

  {
    id: 29,
    title: "Microsoft Fundamentals",
    category: ["Short-Course", "Infomation Technology"],
    instructor: "MMC College",
    duration: "1 months",
    level: "Beginner",
    image: MsImg,
  },
];

export default function Course() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filterCourse =
    activeFilter === "All"
      ? popularCourses
      : popularCourses.filter((course) =>
          course.category.includes(activeFilter),
        );
  return (
    <div className="contianer mx-auto px-6">
      <div className="flex flex-col space-y-3">
        <div className="mt-4 pl-4">
          <h2 className="font-sans text-xl font-bold tracking-tight text-gray-900">
            Courses in Laurnit
          </h2>
          <p className="text-sm font-medium text-gray-500">
            Explore courses that we provided....
          </p>
        </div>

        <div className="flex flex-wrap gap-4 px-3">
          {[
            "All",
            "Computer Science",
            "Business",
            "Design",
            "Language",
            "Academic",
            "Short-Course",
            "Cooking",
            "AI",
            "Beauty",
            "Information Technology",
          ].map((catName) => (
            <button
              key={catName}
              onClick={() => setActiveFilter(catName)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all ${
                activeFilter === catName
                  ? "bg-emerald-400 text-white shadow-md"
                  : "bg-emerald-600/80 text-slate-100 hover:scale-110 hover:bg-emerald-600"
              }`}
            >
              {catName}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filterCourse.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  );
}
