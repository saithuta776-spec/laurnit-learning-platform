import { useState } from "react";
import { Link } from "react-router";
import MsImg from "@/assets/forDetail/microsoft.jpg"; // Replace with your Microsoft image asset path

const msFundamentalsData = {
  id: 29,
  title: "Microsoft Fundamentals",
  category: "Information Technology",
  instructor: "MMC College",
  instructorRole: "Authorized IT Training Center",
  instructorBio:
    "KMD College is a leading IT education institution in Myanmar, offering certified international technology and business management programs for over 35 years.",
  duration: "1 month",
  level: "Beginner",
  price: 180000,
  originalPrice: 220000,
  image: MsImg,
  includes: [
    "Official Microsoft Fundamentals curriculum & slides",
    "Hands-on lab exercises & practical cloud tasks",
    "Official exam preparation & sample question review",
    "Full lifetime access to course recordings",
    "Direct instructor support & Q&A sessions",
    "KMD College Certificate of Completion",
  ],
  curriculum: [
    {
      id: "module-1",
      title: "Module 1: Cloud Concepts & Azure Basics",
      lessons: [
        "Introduction to Cloud Computing & Benefits (20:15)",
        "Comparing IaaS, PaaS, and SaaS Models (25:00)",
        "Core Azure Architectural Components (30:10)",
      ],
    },
    {
      id: "module-2",
      title: "Module 2: Microsoft 365 Core Services",
      lessons: [
        "Overview of Productivity Apps & Teams Integration (22:30)",
        "Cloud Storage & Collaboration with OneDrive/SharePoint (28:00)",
        "Modern Workplace Security & Identity Fundamentals (24:15)",
      ],
    },
    {
      id: "module-3",
      title: "Module 3: Security, Compliance & Exam Practice",
      lessons: [
        "Understanding Zero Trust & Identity Protection (26:40)",
        "Compliance, Privacy & Data Protection Policies (21:10)",
        "Official Exam Strategy & Sample Question Review (35:00)",
      ],
    },
  ],
};

export default function MicrosoftFundamentalsPage() {
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
        <span className="text-gray-600">{msFundamentalsData.category}</span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* LEFT COLUMN */}
        <div className="space-y-10 lg:col-span-2">
          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-black tracking-wider text-blue-800 uppercase">
                {msFundamentalsData.category}
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Level: {msFundamentalsData.level}
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Duration: {msFundamentalsData.duration}
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              {msFundamentalsData.title}
            </h1>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Gain a solid foundational understanding of Microsoft cloud
              concepts, 365 productivity suites, security, and compliance.
              Taught directly by certified trainers from KMD College.
            </p>
          </div>

          {/* Banner Image */}
          <div className="overflow-hidden rounded-[2rem] shadow-md">
            <img
              src={msFundamentalsData.image}
              alt={msFundamentalsData.title}
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
                <span>✅</span> Core Cloud Concepts & Microsoft 365 Apps
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Security, Identity & Compliance Foundations
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Practical hands-on lab exercises
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Official exam guidance from KMD College
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
              {msFundamentalsData.curriculum.map((module) => {
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
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl font-black text-white shadow-sm">
                MMC
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <h4 className="text-base font-bold text-gray-900">
                    {msFundamentalsData.instructor}
                  </h4>
                  <p className="text-xs font-medium text-gray-500">
                    {msFundamentalsData.instructorRole}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {msFundamentalsData.instructorBio}
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
                  {msFundamentalsData.price.toLocaleString()} Ks
                </span>
                <span className="rounded-md bg-blue-100 px-2 py-0.5 text-[10px] font-black text-blue-800">
                  Official Course
                </span>
              </div>
              <p className="text-xs font-bold text-gray-400 line-through">
                {msFundamentalsData.originalPrice.toLocaleString()} Ks
              </p>
              <p className="text-[11px] text-gray-400">
                Lifetime access · Instant enrollment
              </p>
            </div>

            {/* Enroll Button */}
            <button className="w-full rounded-2xl bg-emerald-500 py-3.5 text-xs font-black text-white shadow-md transition-colors hover:bg-emerald-600 sm:text-sm">
              Enroll Now ({msFundamentalsData.price.toLocaleString()} Ks)
            </button>

            <div className="my-4 border-t border-gray-100" />

            {/* Includes List */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black tracking-wider text-gray-400 uppercase">
                This IT course includes:
              </h4>
              <ul className="space-y-2.5 text-xs font-semibold text-gray-600">
                {msFundamentalsData.includes.map((feature, idx) => (
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
