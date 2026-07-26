import { useState } from "react";
import { Link } from "react-router";
import GedImg from "@/assets/forDetail/ged.png";

const gedCourseData = {
  title: "GED For Everybody Exam Preparation",
  description:
    "Master all 4 GED subjects (Math, RLA, Social Studies, Science) with structured practice, exam strategies, and core conceptual reviews to secure your high school equivalency diploma.",
  category: "Academic",
  instructor: "Tr. Berry (KMD)",
  instructorRole: "Academic Lead · GED Instructor",
  instructorBio:
    "Tr. Berry has guided hundreds of students through GED preparation with structured test-taking strategies and personalized subject guidance.",
  bundlePrice: 800000,
  bundleOriginalPrice: 1000000,
  singleSubjectPrice: 250000,
  image: GedImg,
  includes: [
    "Comprehensive coverage of selected subjects",
    "Real exam simulator practice questions",
    "40+ downloadable formula & cheat sheets",
    "Full lifetime access & video lessons",
    "Access on mobile and desktop",
    "Official readiness assessment guidance",
  ],
  subjects: [
    {
      id: "math",
      name: "Mathematical Reasoning",
      lessons: [
        "Algebraic Expressions & Equations (20:15)",
        "Geometry & Perimeter Calculations (18:40)",
        "Functions & Graph Interpretation (25:10)",
      ],
    },
    {
      id: "rla",
      name: "Reasoning Through Language Arts (RLA)",
      lessons: [
        "Reading Comprehension Strategies (22:30)",
        "Extended Response Essay Writing (30:00)",
        "Grammar & Sentence Structure (15:45)",
      ],
    },
    {
      id: "social",
      name: "Social Studies",
      lessons: [
        "US History & Civics Foundations (24:10)",
        "Economics & Global Geography (19:20)",
        "Reading Charts, Graphs & Historical Texts (16:05)",
      ],
    },
    {
      id: "science",
      name: "Science",
      lessons: [
        "Life Science & Cell Biology (21:00)",
        "Physical Science & Chemical Reactions (26:15)",
        "Earth & Space Science Principles (17:30)",
      ],
    },
  ],
};

export default function GedCoursePage() {
  // Selection State: controls pricing and highlight color
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([
    "math",
    "rla",
    "social",
    "science",
  ]);

  // Toggle Selection (Body Click)
  const handleSubjectSelectToggle = (subjectId: string) => {
    if (selectedSubjects.includes(subjectId)) {
      if (selectedSubjects.length > 1) {
        setSelectedSubjects(selectedSubjects.filter((id) => id != subjectId));
      }
    } else {
      setSelectedSubjects([...selectedSubjects, subjectId]);
    }
  };

  // Accordion State: controls expanding lesson dropdowns independently
  const [expandedSubjects, setExpandedSubjects] = useState<string[]>(["math"]);

  // Toggle Accordion Dropdown (Arrow Click Only)
  const toggleAccordion = (subjectId: string, e: React.MouseEvent) => {
    e.stopPropagation(); // Prevents triggering selection when arrow is clicked
    expandedSubjects.includes(subjectId)
      ? setExpandedSubjects(expandedSubjects.filter((id) => id != subjectId))
      : setExpandedSubjects([...expandedSubjects, subjectId]);

    // setExpandedSubjects((sub) =>
    //   sub.includes(subjectId)
    //     ? sub.filter((id) => id !== subjectId)
    //     : [...sub, subjectId],
    // );
  };

  const isAllSelected = selectedSubjects.length === 4;
  const currentPrice = isAllSelected
    ? gedCourseData.bundlePrice
    : selectedSubjects.length * gedCourseData.singleSubjectPrice;

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <div className="mb-6 space-x-2 text-xs font-bold text-gray-400">
        <Link to="/courses" className="hover:text-emerald-600">
          Courses
        </Link>
        <span>/</span>
        <span className="text-gray-600">{gedCourseData.category}</span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* LEFT COLUMN */}
        <div className="space-y-10 lg:col-span-2">
          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black tracking-wider text-emerald-800 uppercase">
                Academic Track
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Official Preparation
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              {gedCourseData.title}
            </h1>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              {gedCourseData.description}
            </p>
          </div>

          {/* Banner Image */}
          <div className="overflow-hidden rounded-[2rem] shadow-md">
            <img
              src={gedCourseData.image}
              alt={gedCourseData.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Learn Objectives */}
          <div className="space-y-4 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black text-gray-950">
              What you will learn inside this preparation
            </h3>
            <div className="grid grid-cols-1 gap-3 text-xs font-medium text-gray-700 sm:text-sm lg:grid-cols-2">
              <p className="flex items-start gap-2">
                <span>✅</span> Official exam test practice
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Subject milestone mock reviews
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Time management & solving strategies
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Direct instructor support & feedback
              </p>
            </div>
          </div>

          {/* CHOOSE SUBJECTS SECTION */}
          <div className="space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                Choose Subjects
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Click a card to select/deselect subject. Click the arrow button
                to view details.
              </p>
            </div>

            <div className="space-y-3">
              {gedCourseData.subjects.map((subject) => {
                const isSelected = selectedSubjects.includes(subject.id);
                const isOpen = expandedSubjects.includes(subject.id);

                return (
                  <div key={subject.id} className="">
                    {/* Subject Card Header */}
                    <div
                      onClick={() => handleSubjectSelectToggle(subject.id)}
                      className={`flex cursor-pointer items-center justify-between rounded-2xl px-6 py-5 font-bold transition-all duration-200 ${
                        isSelected
                          ? "bg-[#a3e6cd] text-gray-950 shadow-sm"
                          : "bg-[#f4f4f5] text-gray-900 hover:bg-gray-200/80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Selected Indicator Checkmark */}
                        <div
                          className={`flex h-5 w-5 items-center justify-center rounded-full text-xs transition-colors ${
                            isSelected
                              ? "bg-emerald-700 text-white"
                              : "border border-gray-400 bg-white"
                          }`}
                        >
                          {isSelected && "✓"}
                        </div>
                        <span className="text-base font-black tracking-tight">
                          {subject.name}
                        </span>
                      </div>

                      {/* Arrow Button - Dedicated for Accordion Toggle */}
                      <button
                        type="button"
                        onClick={(e) => toggleAccordion(subject.id, e)}
                        className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all ${
                          isSelected
                            ? "bg-emerald-800/10 text-emerald-950 hover:bg-emerald-800/20"
                            : "bg-gray-200 text-gray-600 hover:bg-gray-300"
                        }`}
                        title="View subject details"
                      >
                        <span
                          className={`inline-block transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          ▼
                        </span>
                      </button>
                    </div>

                    {/* Accordion Content Dropdown (Only appears on Arrow click) */}
                    {isOpen && (
                      <div className="mt-1 divide-y divide-gray-100 rounded-b-2xl border border-t-0 border-gray-100 bg-slate-50/70 px-6 py-3 text-xs sm:text-sm">
                        <p className="py-2 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                          Curriculum Preview ({subject.lessons.length} Modules):
                        </p>
                        {subject.lessons.map((lesson, idx) => (
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

          {/* Instructor Section */}
          <div className="space-y-4 rounded-2xl border-t border-gray-100 p-4 pt-8">
            <h3 className="text-xl font-black">Your instructor</h3>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-xl font-black text-white shadow-sm">
                {gedCourseData.instructor.charAt(4)}
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <Link
                    to="/instructors/berry"
                    className="text-base font-bold text-gray-900"
                  >
                    {gedCourseData.instructor}
                  </Link>
                  <p className="text-base font-bold text-gray-900 transition-colors hover:text-emerald-600 hover:underline">
                    {gedCourseData.instructorRole}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {gedCourseData.instructorBio}
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
                  {currentPrice.toLocaleString()} Ks
                </span>
                {isAllSelected && (
                  <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-800">
                    20% Off Bundle
                  </span>
                )}
              </div>
              {isAllSelected ? (
                <p className="text-xs font-bold text-gray-400 line-through">
                  {gedCourseData.bundleOriginalPrice.toLocaleString()} Ks
                </p>
              ) : (
                <p className="text-[11px] font-medium text-amber-600">
                  Select all 4 subjects for the 800,000 Ks bundle rate!
                </p>
              )}
              <p className="text-[11px] text-gray-400">
                Secure validation · Cancel anytime
              </p>
            </div>

            {/* Selected Summary Pill */}
            <div className="rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs font-medium text-gray-600">
              Selected:{" "}
              <span className="font-bold text-emerald-700">
                {selectedSubjects.length} of 4 subjects
              </span>
            </div>

            {/* Checkout Button */}
            <button className="w-full rounded-2xl bg-emerald-500 py-3.5 text-xs font-black text-white shadow-md transition-colors hover:bg-emerald-600 sm:text-sm">
              Enroll Selected ({selectedSubjects.length} Subject
              {selectedSubjects.length > 1 ? "s" : ""})
            </button>

            <div className="my-4 border-t border-gray-100" />

            {/* Includes List */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black tracking-wider text-gray-400 uppercase">
                This academic course includes:
              </h4>
              <ul className="space-y-2.5 text-xs font-semibold text-gray-600">
                {gedCourseData.includes.map((feature, idx) => (
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
