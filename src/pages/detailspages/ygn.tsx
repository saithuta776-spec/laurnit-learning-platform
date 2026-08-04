import { useState } from "react";
import { Link } from "react-router";
import YuImg from "@/assets/forDetail/yu.jpg"; // Adjust import path if needed

const englishForPsychologyData = {
  id: 4,
  title: "English for Psychology",
  category: "Short-Course",
  instructor: "Yangon University",
  instructorRole: "Academic Language & Social Sciences Department",
  instructorBio:
    "Yangon University's specialized language programs are designed by leading academic faculty to equip students and professionals with domain-specific English fluency for higher education and career advancement.",
  duration: "2 months",
  level: "Beginner",
  price: 150000,
  originalPrice: 300000,
  image: YuImg,
  includes: [
    "30+ hours on-demand video",
    "25 downloadable reading resources",
    "10 academic writing exercises",
    "Full lifetime access",
    "Access on mobile and desktop",
    "Certificate of completion",
  ],
  curriculum: [
    {
      id: "module-1",
      title: "English for Psychology Masterclass",
      lessons: [
        "Introduction to Psychological Vocabulary & Core Terminology",
        "Reading & Analyzing Academic Psychology Papers",
        "Expressing Theories, Hypotheses & Cognitive Concepts",
        "Writing Case Studies & Research Summaries in English",
        "Academic Discussion & Presenting Psychological Findings",
      ],
    },
  ],
};

export default function EnglishForPsychologyPage() {
  // Accordion State: controls expanding lesson dropdowns independently
  const [expandedModules, setExpandedModules] = useState<string[]>([
    "module-1",
  ]);

  // Toggle Accordion Dropdown
  const toggleAccordion = (moduleId: string) => {
    expandedModules.includes(moduleId)
      ? setExpandedModules(expandedModules.filter((id) => id !== moduleId))
      : setExpandedModules([...expandedModules, moduleId]);
  };

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 space-x-2 text-xs font-bold text-gray-400">
        <Link to="/courses" className="hover:text-emerald-600">
          Courses
        </Link>
        <span>/</span>
        <span className="text-gray-600">
          {englishForPsychologyData.category}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* LEFT COLUMN */}
        <div className="space-y-10 lg:col-span-2">
          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black tracking-wider text-emerald-800 uppercase">
                {englishForPsychologyData.category}
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Level: {englishForPsychologyData.level}
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Duration: {englishForPsychologyData.duration}
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              {englishForPsychologyData.title}
            </h1>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Enhance your academic and professional English communication
              within the field of psychology. Master specialized psychological
              terminology, academic reading, analytical writing, and research
              discussion skills.
            </p>
          </div>

          {/* Banner Image */}
          <div className="overflow-hidden rounded-[2rem] shadow-md">
            <img
              src={englishForPsychologyData.image}
              alt={englishForPsychologyData.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* What You Will Learn */}
          <div className="space-y-4 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black text-gray-950">
              What you will learn inside this course
            </h3>
            <div className="grid grid-cols-1 gap-3 text-xs font-medium text-gray-700 sm:text-sm lg:grid-cols-2">
              <p className="flex items-start gap-2">
                <span>✅</span> Domain-specific Psychological Terminology
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Academic Case Study Writing & Analysis
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Research Discussion & Thesis Presentation
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Official Certification from Yangon University
              </p>
            </div>
          </div>

          {/* CURRICULUM ACCORDION SECTION */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Course Curriculum
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Click a module header to expand and preview the topics.
              </p>
            </div>

            <div className="space-y-3">
              {englishForPsychologyData.curriculum.map((module) => {
                const isOpen = expandedModules.includes(module.id);

                return (
                  <div key={module.id}>
                    {/* Module Header Button */}
                    <button
                      type="button"
                      onClick={() => toggleAccordion(module.id)}
                      className="flex w-full items-center justify-between rounded-2xl bg-[#f4f4f5] px-6 py-5 text-left font-bold transition-all duration-200 hover:bg-gray-200/80"
                    >
                      <span className="text-base font-black tracking-tight text-gray-900">
                        {module.title}
                      </span>
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-sm text-gray-600 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Accordion Content Dropdown */}
                    {isOpen && (
                      <div className="mt-1 divide-y divide-gray-100 rounded-b-2xl border border-t-0 border-gray-100 bg-slate-50/70 px-6 py-3 text-xs sm:text-sm">
                        <p className="py-2 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                          Lessons ({module.lessons.length} Modules):
                        </p>
                        {module.lessons.map((lesson, idx) => (
                          <div
                            key={idx}
                            className="group flex cursor-pointer items-center gap-3 py-2.5 text-gray-700 hover:text-emerald-700"
                          >
                            <span className="text-gray-400 transition-colors group-hover:text-emerald-600">
                              ▶️
                            </span>
                            <span className="flex-1 font-medium">{lesson}</span>
                            <span className="text-[10px] font-bold text-emerald-600 underline opacity-0 transition-opacity group-hover:opacity-100">
                              Preview
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Instructor / Institution Section */}
          <div className="space-y-4 rounded-2xl border-t border-gray-100 p-4 pt-8">
            <h3 className="text-xl font-black">Provided by</h3>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-black text-white shadow-sm">
                YU
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <Link
                    to="/instructors/yu"
                    className="text-base font-bold text-gray-900"
                  >
                    {englishForPsychologyData.instructor}
                  </Link>
                  <p className="text-xs font-medium text-gray-500">
                    {englishForPsychologyData.instructorRole}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {englishForPsychologyData.instructorBio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STICKY CHECKOUT BOX */}
        <div className="lg:col-span-1">
          <div className="sticky top-5 space-y-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl">
            {/* Price Header */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black tracking-tight text-gray-950">
                  {englishForPsychologyData.price.toLocaleString()} Ks
                </span>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-800">
                  20% OFF
                </span>
              </div>
              <p className="text-xs font-bold text-gray-400 line-through">
                {englishForPsychologyData.originalPrice.toLocaleString()} Ks
              </p>
              <p className="text-[11px] text-gray-400">
                Lifetime access · Instant enrollment
              </p>
            </div>

            {/* Enroll Button */}
            <button className="w-full rounded-2xl bg-emerald-500 py-3.5 text-xs font-black text-white shadow-md transition-colors hover:bg-emerald-600 sm:text-sm">
              Enroll Now ({englishForPsychologyData.price.toLocaleString()} Ks)
            </button>

            <div className="my-4 border-t border-gray-100" />

            {/* Includes List */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black tracking-wider text-gray-400 uppercase">
                This course includes:
              </h4>
              <ul className="space-y-2.5 text-xs font-semibold text-gray-600">
                {englishForPsychologyData.includes.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="text-xs text-emerald-600">✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
