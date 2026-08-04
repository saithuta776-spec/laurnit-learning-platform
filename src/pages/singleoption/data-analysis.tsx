import { useState } from "react";
import { useNavigate } from "react-router";

const SINGLE_MODULE_PRICE = 200000; // 200,000 Ks per module
const FULL_BUNDLE_PRICE = 800000; // Discounted bundle price when selecting all modules

const courseModules = [
  {
    id: 1,
    number: "Course 1",
    title: "Introduction to Python & Fundamentals",
    description:
      "Build a strong foundation in Python syntax, data types, and logic structures.",
    lessonsCount: 12,
  },
  {
    id: 2,
    number: "Course 2",
    title: "Data Cleaning, Wrangling & Scraping",
    description:
      "Learn to clean unstructured datasets, use Regex, and scrape web data effortlessly.",
    lessonsCount: 15,
  },
  {
    id: 3,
    number: "Course 3",
    title: "Structured Data Management with SQL",
    description:
      "Master relational schemas, complex database JOINs, and query indexing.",
    lessonsCount: 10,
  },
  {
    id: 4,
    number: "Course 4",
    title: "Data Visualization & Dashboard Analytics",
    description:
      "Create stunning charts using Matplotlib, Seaborn, and interactive Plotly dashboards.",
    lessonsCount: 14,
  },
  {
    id: 5,
    number: "Course 5",
    title: "Applied Machine Learning & Predictive Models",
    description:
      "Train classification and regression models and build a full capstone portfolio project.",
    lessonsCount: 18,
  },
];

export default function SingleCourseOption() {
  const navigate = useNavigate();

  // Selected modules state (Default: First module selected)
  const [selectedIds, setSelectedIds] = useState<number[]>([1]);

  // Toggle selection (ensures at least 1 module is always selected)
  const toggleModule = (id: number) => {
    if (selectedIds.includes(id)) {
      if (selectedIds.length === 1) {
        alert("You must select at least one module!");
        return;
      }
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const selectAllModules = () => {
    setSelectedIds(courseModules.map((m) => m.id));
  };

  // Pricing calculations
  const totalModulesCount = courseModules.length;
  const selectedCount = selectedIds.length;
  const isFullBundle = selectedCount === totalModulesCount;

  const originalPrice = selectedCount * SINGLE_MODULE_PRICE;
  const finalPrice = isFullBundle ? FULL_BUNDLE_PRICE : originalPrice;
  const savings = isFullBundle ? originalPrice - FULL_BUNDLE_PRICE : 0;

  return (
    <div className="container mx-auto px-6 py-10">
      {/* Top Header & Back Button */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="group mb-2 inline-flex items-center gap-2 text-xs font-bold text-gray-500 transition-colors hover:text-emerald-600"
          >
            <span className="transition-transform group-hover:-translate-x-1">
              ←
            </span>{" "}
            Back to Main Specialization
          </button>
          <h1 className="text-2xl font-black text-gray-950 sm:text-3xl">
            Custom Modular Selection
          </h1>
          <p className="mt-1 text-xs text-gray-500 sm:text-sm">
            Pick individual modules or select all {totalModulesCount} to unlock
            full specialization discount pricing.
          </p>
        </div>

        <button
          type="button"
          onClick={selectAllModules}
          disabled={isFullBundle}
          className={`self-start rounded-xl px-4 py-2.5 text-xs font-bold transition-all sm:self-auto ${
            isFullBundle
              ? "cursor-not-allowed bg-gray-100 text-gray-400"
              : "border border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
          }`}
        >
          {isFullBundle
            ? "✓ All Selected"
            : `Select All ${totalModulesCount} Modules (Best Value)`}
        </button>
      </div>

      <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
        {/* LEFT COLUMN: MODULE SELECTION LIST */}
        <div className="space-y-4 lg:col-span-2">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <h2 className="text-sm font-black tracking-wider text-gray-400 uppercase">
              Select Modules ({selectedCount} of {totalModulesCount} selected)
            </h2>
            <span className="text-xs text-gray-400">
              Minimum: 1 Module required
            </span>
          </div>

          <div className="space-y-3">
            {courseModules.map((module) => {
              const isSelected = selectedIds.includes(module.id);
              return (
                <div
                  key={module.id}
                  onClick={() => toggleModule(module.id)}
                  className={`cursor-pointer rounded-2xl border p-5 transition-all ${
                    isSelected
                      ? "border-emerald-500 bg-emerald-50/30 shadow-sm"
                      : "border-gray-100 bg-white hover:border-gray-200 hover:bg-slate-50/50"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Custom Checkbox */}
                    <div
                      className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors ${
                        isSelected
                          ? "border-emerald-600 bg-emerald-600 text-white"
                          : "border-gray-300 bg-white"
                      }`}
                    >
                      {isSelected && (
                        <span className="text-xs font-bold">✓</span>
                      )}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black tracking-widest text-emerald-600 uppercase">
                          {module.number}
                        </span>
                        <span className="text-xs font-extrabold text-gray-900">
                          {SINGLE_MODULE_PRICE.toLocaleString()} Ks
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-gray-950 sm:text-base">
                        {module.title}
                      </h3>
                      <p className="text-xs leading-relaxed text-gray-500">
                        {module.description}
                      </p>
                      <p className="pt-1 text-[11px] font-medium text-gray-400">
                        {module.lessonsCount} interactive lessons
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: DYNAMIC ORDER SUMMARY CARD */}
        <div className="lg:col-span-1">
          <div className="sticky top-5 space-y-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl">
            <h3 className="text-lg font-black text-gray-950">
              Custom Order Summary
            </h3>

            {/* Selected Breakdown List */}
            <div className="space-y-2 border-b border-gray-100 pb-4">
              <span className="text-[10px] font-black tracking-wider text-gray-400 uppercase">
                Included in your bundle:
              </span>
              <ul className="space-y-1.5 text-xs font-medium text-gray-600">
                {courseModules
                  .filter((m) => selectedIds.includes(m.id))
                  .map((m) => (
                    <li
                      key={m.id}
                      className="flex items-center justify-between"
                    >
                      <span className="truncate pr-2">• {m.title}</span>
                      <span className="shrink-0 text-[10px] text-gray-400">
                        {SINGLE_MODULE_PRICE.toLocaleString()} Ks
                      </span>
                    </li>
                  ))}
              </ul>
            </div>

            {/* Pricing Details */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold text-gray-500">
                <span>
                  Subtotal ({selectedCount} module
                  {selectedCount > 1 ? "s" : ""}):
                </span>
                <span>{originalPrice.toLocaleString()} Ks</span>
              </div>

              {isFullBundle && (
                <div className="flex justify-between text-xs font-bold text-emerald-600">
                  <span>Full Specialization Discount:</span>
                  <span>- {savings.toLocaleString()} Ks (20% OFF)</span>
                </div>
              )}

              <div className="my-2 border-t border-gray-100 pt-2" />

              <div className="flex items-baseline justify-between">
                <span className="text-sm font-black text-gray-950">
                  Total Price:
                </span>
                <span className="text-2xl font-black text-emerald-600">
                  {finalPrice.toLocaleString()} Ks
                </span>
              </div>
            </div>

            {/* Dynamic CTA */}
            <button
              type="button"
              className="w-full rounded-2xl bg-emerald-500 py-3.5 text-xs font-black text-white shadow-md transition-colors hover:bg-emerald-600 sm:text-sm"
            >
              Enroll in {selectedCount} Selected Module
              {selectedCount > 1 ? "s" : ""}
            </button>

            {/* Guarantee Tag */}
            <p className="text-center text-[11px] font-medium text-gray-400">
              Full lifetime access to selected modules & updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
