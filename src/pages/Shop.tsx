import p1 from "@/assets/data.png";
import p2 from "@/assets/ai.png";
import p3 from "@/assets/lan.png";
import p4 from "@/assets/music.png";
import p5 from "@/assets/education.png";
import p6 from "@/assets/cooking.webp";
import PCard from "@/components/ProductCard";

// import CourseCard from "@/components/CourseCard";
import PyImg from "@/assets/Data ANalysis.avif";
import GedImg from "@/assets/GED.png";
import MernImg from "@/assets/MERN.webp";
// import YuImg from "@/assets/YU.jpg";
import { useState } from "react";
import CourseCard from "@/components/CourseCard";

import CsImg from "@/assets/CsImg.jpg";
import McsImg from "@/assets/Math.jpg";
import BrImg from "@/assets/brand.jpg";
import DiImg from "@/assets/digital.jpg";
import MaImg from "@/assets/market.jpg";
import StImg from "@/assets/startup.jpg";
import AdImg from "@/assets/adobe.jpg";
import UuxImg from "@/assets/Ui.jpg";
import GfImg from "@/assets/Graphic.jpg";
import MsImg from "@/assets/microsoft.jpg";
import { Link } from "react-router";

const ccard = [
  { id: 1, name: "Data-Science", image: p1 },
  { id: 2, name: "AI", image: p2 },
  { id: 3, name: "Language", image: p3 },
  { id: 4, name: "Musical", image: p4 },
  { id: 5, name: "Academic", image: p5 },
  { id: 6, name: "Cooking", image: p6 },
];

const popularCourses = [
  {
    id: 1,
    title: "Data Analysis with Python",
    category: "Computer Science",
    instructor: "Sayar Htet Wai",
    duration: "8 months",
    level: "Beginner",
    image: PyImg,
    showINAll: true, // Replace with local asset
  },
  {
    id: 2,
    title: "GED For Everybody",
    category: "Academic",
    instructor: "Tr. Betty (KMD)",
    duration: "4 months",
    level: "Beginner",
    image: GedImg,
    showINAll: true, // Replace with local asset
  },
  {
    id: 3,
    title: "MERN Full-stack Developer",
    category: "Computer Science",
    instructor: "Sayar Kyaw Ye + Assistant teachers",
    duration: "8 months",
    level: "Basic to Adv",
    image: MernImg,
    showINAll: true, // Replace with local asset
  },

  {
    id: 29,
    title: "Microsoft Fundamentals",
    category: ["Short-Course", "Infomation Technology"],
    instructor: "KMD College",
    duration: "1 months",
    level: "Beginner",
    image: MsImg,
    showINAll: true,
  },

  {
    id: 5,
    title: "Foundation For Computer Science",
    category: "Computer Science",
    instructor: "Sayar Htet Wai",
    duration: "2 months",
    level: "Beginner",
    image: CsImg,
    showINAll: false, // Replace with local asset
  },

  {
    id: 6,
    title: "Mathematics For Computer Science",
    category: "Computer Science",
    instructor: "Sayar Htet Wai",
    duration: "3 months",
    level: "Beginner",
    image: McsImg,
    showINAll: false, // Replace with local asset
  },

  {
    id: 7,
    title: "Branding Management",
    category: "Business",
    instructor: "Tr Cherry Mya",
    duration: "1.5 months",
    level: "Beginner",
    image: BrImg,
    showINAll: false, // Replace with local asset
  },

  {
    id: 8,
    title: "Digital Marketing with Strategy",
    category: "Business",
    instructor: "Sayar Chan Aye",
    duration: "3 months",
    level: "Intermediate",
    image: DiImg,
    showINAll: false, // Replace with local asset
  },

  {
    id: 9,
    title: "Introduction to Marketing",
    category: "Business",
    instructor: "Tr Cherry Mya",
    duration: "3.5 months",
    level: "Basic to Inter",
    image: MaImg,
    showINAll: false, // Replace with local asset
  },

  {
    id: 10,
    title: "Startup Enterpreneurship",
    category: "Business",
    instructor: "Tr Cho Cho Kha",
    duration: "3.5 months",
    level: "Basic",
    image: StImg,
    showINAll: false, // Replace with local asset
  },

  {
    id: 11,
    title: "Design with Adobe Package",
    category: "Design",
    instructor: "Stam Organization",
    duration: "6 months",
    level: "Basic to Inter",
    image: AdImg,
    showINAll: false, // Replace with local asset
  },

  {
    id: 12,
    title: "Mastering UI/UX",
    category: "Design",
    instructor: "Stam Organization",
    duration: "8 months",
    level: "Basic to Adv",
    image: UuxImg,
    showINAll: false, // Replace with local asset
  },

  {
    id: 13,
    title: "Graphic Design Fundamentals",
    category: "Design",
    instructor: "Sr Chan Aye",
    duration: "1.5 months",
    level: "Baginner",
    image: GfImg,
    showINAll: false, // Replace with local asset
  },
];

export default function Shop() {
  const [activeFilter, setActiveFilter] = useState("All");
  const filterCourse =
    activeFilter === "All"
      ? popularCourses.filter((course) => course.showINAll === true)
      : popularCourses.filter((course) => course.category === activeFilter);

  return (
    <div className="container mx-auto">
      <div className="mb-6 flex items-end justify-between">
        <div className="mt-4 pl-6">
          <h2 className="text-xl font-black tracking-tight text-gray-900">
            Explore Top Course
          </h2>
          <p className="text-sm font-medium tracking-normal text-gray-500/20">
            Choose from hundreds of courses across every discipline
          </p>
        </div>

        <Link
          to="/courses"
          className="cursor-pointer text-sm font-bold tracking-wider text-gray-900 hover:underline"
        >
          View all &gt;&gt;&gt;
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 p-6 md:grid-cols-3 lg:grid-cols-6">
        {ccard.map((course) => (
          <PCard key={course.id} {...course} />
        ))}
      </div>

      <div className="my-4 border-t border-emerald-800/40" />

      <div className="">
        <div className="space-y-2 pl-4">
          <div className="">
            <h2 className="text-xl font-black tracking-tight text-gray-950">
              Most Popular Courses
            </h2>
            <p className="text-sm font-medium text-gray-500">
              Curated for you based on your interests..........
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {["All", "Computer Science", "Business", "Design"].map(
              (catName) => (
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
              ),
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {filterCourse.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}
