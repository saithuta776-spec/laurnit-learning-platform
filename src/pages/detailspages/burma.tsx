import { useState } from "react";
import { Link } from "react-router";
import CbImg from "@/assets/forDetail/cooking.jpg"; // Adjust import path if needed

const cookingBurmaData = {
  id: 19,
  title: "Cooking Burma Traditional Food",
  category: "Cooking",
  instructor: "Tr Wai",
  instructorRole: "Culinary Arts Instructor & Traditional Burmese Chef",
  instructorBio:
    "Tr Wai is an experienced culinary instructor passionate about preserving authentic Burmese recipes and cooking heritage. She guides students through fundamental traditional techniques, aromatic spice pairings, and essential kitchen practices for classic dishes.",
  duration: "1 month",
  level: "Beginner",
  price: 25000,
  originalPrice: 50000,
  image: CbImg,
  includes: [
    "20+ hours on-demand video cooking lessons",
    "15 authentic recipe cards & ingredient guides",
    "Step-by-step preparation & technique breakdowns",
    "Full lifetime access",
    "Access on mobile and desktop",
    "Certificate of completion",
  ],
  curriculum: [
    {
      id: "module-1",
      title: "Traditional Burmese Culinary Masterclass",
      lessons: [
        "Introduction to Essential Burmese Spices, Oils & Aromatics",
        "Mastering Traditional Noodle Dishes (Mohinga & Rakhine Mont Di)",
        "Rich Curries & Flavor Bases: Poultry, Meat, and Seafood Foundations",
        "Crafting Authentic Burmese Teahouse Snacks & Salads (A Thoke)",
        "Traditional Dessert Preparation & Table Presentation",
      ],
    },
  ],
};

export default function CookingBurmaPage() {
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
        <span className="text-gray-600">{cookingBurmaData.category}</span>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* LEFT COLUMN */}
        <div className="space-y-10 lg:col-span-2">
          {/* Header & Badges */}
          <div className="space-y-3">
            <div className="flex gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black tracking-wider text-emerald-800 uppercase">
                {cookingBurmaData.category}
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Level: {cookingBurmaData.level}
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Duration: {cookingBurmaData.duration}
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              {cookingBurmaData.title}
            </h1>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              Learn the rich history, aromatic flavors, and authentic techniques
              of traditional Burmese cuisine. From iconic noodle dishes like
              Mohinga to savory curries and refreshing salads, master home-style
              Burmese cooking with step-by-step guidance.
            </p>
          </div>

          {/* Banner Image */}
          <div className="overflow-hidden rounded-[2rem] shadow-md">
            <img
              src={cookingBurmaData.image}
              alt={cookingBurmaData.title}
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
                <span>✅</span> Authentic Burmese Spice Profiles & Oil Infusions
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Classic Noodle Soups & Street Food Recipes
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Traditional Curry Base & Slow-Cooking Methods
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Balanced Salad Dressing & Garnish Mastery
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
              {cookingBurmaData.curriculum.map((module) => {
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
                          Lessons ({module.lessons.length} Topics):
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
                TW
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <Link
                    to="/instructors/wai"
                    className="text-base font-bold text-gray-900"
                  >
                    {cookingBurmaData.instructor}
                  </Link>
                  <p className="text-xs font-medium text-gray-500">
                    {cookingBurmaData.instructorRole}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-gray-600 sm:text-sm">
                  {cookingBurmaData.instructorBio}
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
                  {cookingBurmaData.price.toLocaleString()} Ks
                </span>
                <span className="rounded-md bg-emerald-100 px-2 py-0.5 text-[10px] font-black text-emerald-800">
                  20% OFF
                </span>
              </div>
              <p className="text-xs font-bold text-gray-400 line-through">
                {cookingBurmaData.originalPrice.toLocaleString()} Ks
              </p>
              <p className="text-[11px] text-gray-400">
                Lifetime access · Instant enrollment
              </p>
            </div>

            {/* Enroll Button */}
            <button className="w-full rounded-2xl bg-emerald-500 py-3.5 text-xs font-black text-white shadow-md transition-colors hover:bg-emerald-600 sm:text-sm">
              Enroll Now ({cookingBurmaData.price.toLocaleString()} Ks)
            </button>

            <div className="my-4 border-t border-gray-100" />

            {/* Includes List */}
            <div className="space-y-3">
              <h4 className="text-[10px] font-black tracking-wider text-gray-400 uppercase">
                This course includes:
              </h4>
              <ul className="space-y-2.5 text-xs font-semibold text-gray-600">
                {cookingBurmaData.includes.map((feature, idx) => (
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
