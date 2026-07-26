import { useState } from "react";
import { Link } from "react-router";
import uiux from "@/assets/forDetail/uiux.jpg";

const masteringUiUx = {
  title: "Mastering UI/UX",
  description:
    "Master end-to-end digital product design. Learn user research, wireframing, interactive prototyping, design systems, and usability testing using Figma and industry-standard workflows to craft intuitive user experiences.",
  category: "Design",
  instructor: "Stam Organization",
  instructorRole: "Creative Tech Institute · Product Design Collective",
  instructorBio:
    "Stam Organization delivers professional creative education through industry-vetted designers and multimedia specialists. They focus on practical, project-based design workflows for modern creative industries.",
  price: "950,000 Ks",
  originalPrice: "1,200,000 Ks",
  discount: "21% off",
  image: uiux,
  includes: [
    "8 months complete program",
    "120+ hours on-demand video",
    "45 downloadable Figma UI kits & UX frameworks",
    "12 portfolio-ready case study assignments",
    "Full lifetime access",
    "Certificate of completion",
  ],
  series: [
    {
      id: 801,
      number: "Course 1",
      title: "UX Research, Personas & Information Architecture",
      lessons: [
        "User Research Methods & Qualitative Interviews (18:20)",
        "Creating User Personas & Journey Maps (22:45)",
        "Information Architecture & Sitemap Structuring (20:10)",
      ],
    },
    {
      id: 802,
      number: "Course 2",
      title: "Wireframing & Low-Fidelity Design in Figma",
      lessons: [
        "Figma Interface Mastery & Frame Architecture (19:30)",
        "Sketching & Building Low-Fidelity Wireframes (25:15)",
        "User Flow Mapping & Interaction Logic (21:40)",
      ],
    },
    {
      id: 803,
      number: "Course 3",
      title: "UI Design Principles, Typography & Layout Systems",
      lessons: [
        "Visual Hierarchy, Grid Systems & Spacing Rules (24:10)",
        "Color Theory, Accessibility (WCAG) & Contrast (22:05)",
        "Typography Scaling & Responsive Screen Layouts (26:50)",
      ],
    },
    {
      id: 804,
      number: "Course 4",
      title: "Design Systems, Auto Layout & Advanced Components",
      lessons: [
        "Mastering Auto Layout & Responsive UI Constraints (28:30)",
        "Component Variants, Properties & Tokens (31:15)",
        "Building Scalable Multi-Platform Design Systems (27:40)",
      ],
    },
    {
      id: 805,
      number: "Course 5",
      title: "Interactive Prototyping, Usability Testing & Portfolio",
      lessons: [
        "Advanced Figma Prototyping & Smart Animate (29:20)",
        "Conducting Usability Tests & Iterating Designs (23:10)",
        "Capstone Project: End-to-End Product Design Case Study (48:00)",
      ],
    },
  ],
};

export default function UiUx() {
  // Accordion State: Stores IDs of opened sub-courses
  const [expandedSeriesIds, setExpandedSeriesIds] = useState<number[]>([101]);

  const toggleAccordion = (seriesId: number) => {
    if (expandedSeriesIds.includes(seriesId)) {
      setExpandedSeriesIds(
        expandedSeriesIds.filter((item) => item !== seriesId),
      );
    } else {
      setExpandedSeriesIds([...expandedSeriesIds, seriesId]);
    }
  };

  // Get current active specialization configuration data
  const data = masteringUiUx;
  return (
    <div className="container mx-auto px-6 py-10">
      {/* Breadcrumb Navigation */}
      <div className="mb-6 space-x-2 text-xs font-bold text-gray-400">
        <Link to="/courses" className="hover:text-emerald-600">
          Courses
        </Link>
        <span>/</span>
        <span className="text-gray-600">{data.category}</span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* LEFT COLUMN: MAIN SPECIFICATION DESCRIPTION */}
        <div className="space-y-10 lg:col-span-2">
          {/* Metadata Badges & Titles */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black tracking-wider text-emerald-800 uppercase">
                Specialization Series
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Updated July 2026
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              {data.title}
            </h1>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              {data.description}
            </p>
          </div>

          {/* Large Aspect Aspect Banner image */}
          <div className="overflow-hidden rounded-[2rem] shadow-md">
            <img
              src={data.image}
              alt={data.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Coursera Core Objective Highlights */}
          <div className="space-y-4 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black text-gray-950">
              What you will learn inside this bundle
            </h3>
            <div className="grid grid-cols-1 gap-3 text-xs font-medium text-gray-700 sm:text-sm lg:grid-cols-2">
              <p className="flex items-start gap-2">
                <span>✅</span> Core conceptual development tools
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Complete architectural production-ready builds
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Technical problem solving & logic patterns
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Portfolio validation capstone exercises
              </p>
            </div>
          </div>

          {/* CURRICULUM ACCORDION SERIES STACK */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-black text-gray-950 sm:text-2xl">
                Specialization Curriculum
              </h3>
              <p className="text-xs text-gray-500">
                Complete all {data.series.length} modular tracking modules to
                unlock credentials
              </p>
            </div>

            <div className="space-y-3">
              {data.series.map((module: any) => {
                const isOpen = expandedSeriesIds.includes(module.id);
                return (
                  <div
                    key={module.id}
                    className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
                  >
                    {/* Header Trigger row */}
                    <button
                      onClick={() => toggleAccordion(module.id)}
                      className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-slate-50/60"
                    >
                      <div className="pr-4">
                        <span className="mb-0.5 block text-[10px] font-black tracking-widest text-emerald-600 uppercase">
                          {module.number}
                        </span>
                        <h4 className="text-sm leading-snug font-bold text-gray-900 sm:text-base">
                          {module.title}
                        </h4>
                        <p className="mt-1 text-[11px] text-gray-400">
                          {module.lessons.length} core video lessons ·
                          Interactive Content
                        </p>
                      </div>
                      <span
                        className={`text-xs text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Animated Open Lesson Sublist */}
                    {isOpen && (
                      <div className="divide-y divide-gray-100/70 border-t border-gray-50 bg-slate-50/40 px-5 py-2 text-xs sm:text-sm">
                        {module.lessons.map((lesson: string, idx: number) => (
                          <div
                            key={idx}
                            className="group flex cursor-pointer items-center gap-3 py-3 text-gray-700 hover:text-emerald-700"
                          >
                            <span className="text-gray-400 transition-colors group-hover:text-emerald-600">
                              ▶️
                            </span>
                            <span className="flex-1 font-medium">{lesson}</span>
                            <span className="text-[10px] font-bold text-emerald-600 underline opacity-0 transition-opacity group-hover:opacity-100">
                              Preview Lesson
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

          {/* Instructor Block Box */}
          <div className="space-y-4 rounded-2xl border-t border-gray-100 p-4 pt-8">
            <h3 className="text-xl font-black">Your instructor</h3>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-emerald-300 text-xl font-black text-white shadow-sm">
                {data.instructor.charAt(0)}
              </div>
              <div className="flex-1 space-y-2">
                <div className="">
                  <Link
                    to="/instructors/stam"
                    className="text-base font-bold text-gray-900"
                  >
                    {masteringUiUx.instructor}
                  </Link>
                  <p className="text-xs font-medium text-gray-500">
                    {data.instructorRole}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {data.instructorBio}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: STICKY FLOATING CHECKOUT CARD (1/3 Width) */}
        <div className="lg:col-span-1">
          <div className="sticky top-5 space-y-6 rounded-[2rem] border border-gray-100 p-6 shadow-xl">
            {/* Currency Pricing Values */}
            <div className="space-y-1">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-black tracking-tight text-gray-950">
                  {data.price}
                </span>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-800">
                  {data.discount}
                </span>
              </div>
              <p className="text-xs font-bold text-gray-400 line-through">
                {data.originalPrice}
              </p>
              <p className="text-[11px] text-gray-400">
                Secure validation · Cancel anytime
              </p>
            </div>

            {/* CTA Option Triggers */}
            <div className="space-y-2.5">
              <button className="w-full rounded-2xl bg-emerald-500 py-3.5 text-xs font-black text-white shadow-md transition-colors hover:bg-emerald-600 sm:text-sm">
                Buy Full Specialization Bundle
              </button>
              <button className="w-full rounded-2xl border border-gray-950 bg-gray-950 py-3.5 text-xs font-black text-white transition-colors hover:bg-gray-800 sm:text-sm">
                Single Course Option
              </button>
            </div>

            <div className="my-4 border-t border-gray-100" />

            {/* Inclusion Checkpoints */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black tracking-wider text-gray-400 uppercase">
                This bundle pack includes:
              </h4>
              <ul className="space-y-2.5 text-xs font-semibold text-gray-600">
                {data.includes.map((feature: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-2.5">
                    <span className="text-xs text-emerald-600">✔</span>
                    <span>{feature}</span>
                  </li>
                  // Fpr is the meaning of landing the new page while rendering the same page on the same site of vite.
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
