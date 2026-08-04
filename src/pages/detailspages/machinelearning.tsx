import { useState } from "react";
import { Link } from "react-router";
import MlImg from "@/assets/forDetail/machine-learning.jpg"; // Adjust asset path if necessary

const machineLearning = {
  id: 24,
  title: "Machine Learning Specialization",
  description:
    "Master core and advanced machine learning techniques. Build, train, and deploy real-world predictive models using Python, Scikit-Learn, TensorFlow, and PyTorch.",
  category: "AI & Information Technology",
  duration: "8 months",
  level: "Inter to Adv",
  instructor: "Sayar Htet Wai",
  instructorRole: "Data Science Lead · AI Research Engineer",
  instructorBio:
    "Sayar Htet Wai has spent years crafting production data workflows and architectural schemas. He focuses on data-driven design structures that help engineering teams work efficiently.",
  price: "800,000 Ks",
  originalPrice: "1,000,000 Ks",
  discount: "20% off",
  image: MlImg,
  includes: [
    "120+ hours on-demand video",
    "50+ hands-on Jupyter Notebooks",
    "15 real-world ML labs",
    "Full lifetime access",
    "Access on mobile and desktop",
    "Specialization Certificate of completion",
  ],
  series: [
    {
      id: 201,
      number: "Course 1",
      title: "Supervised Learning: Regression and Classification",
      lessons: [
        "Introduction to Machine Learning Workflows (14:20)",
        "Linear Regression & Gradient Descent (20:15)",
        "Logistic Regression & Evaluation Metrics (18:40)",
      ],
    },
    {
      id: 202,
      number: "Course 2",
      title: "Advanced Learning Algorithms & Neural Networks",
      lessons: [
        "Neural Network Architectures & Forward Pass (22:10)",
        "TensorFlow & Model Training Optimization (28:45)",
        "Decision Trees & Random Forests (25:30)",
      ],
    },
    {
      id: 203,
      number: "Course 3",
      title: "Unsupervised Learning, Recommenders & Reinforcement Learning",
      lessons: [
        "Clustering with K-Means & PCA (21:15)",
        "Collaborative Filtering & Recommender Systems (26:00)",
        "Deep Q-Learning & Capstone AI Model Deployment (40:00)",
      ],
    },
  ],
};

export default function MachineLearning() {
  // Accordion State: Stores IDs of opened sub-courses
  const [expandedSeriesIds, setExpandedSeriesIds] = useState<number[]>([201]);

  const toggleAccordion = (seriesId: number) => {
    if (expandedSeriesIds.includes(seriesId)) {
      setExpandedSeriesIds(
        expandedSeriesIds.filter((item) => item !== seriesId),
      );
    } else {
      setExpandedSeriesIds([...expandedSeriesIds, seriesId]);
    }
  };

  const data = machineLearning;

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
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-black tracking-wider text-emerald-800 uppercase">
                Specialization Series
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Level: {data.level}
              </span>
              <span className="rounded-full bg-gray-100 px-2.5 py-1 text-[10px] font-medium text-gray-800">
                Duration: {data.duration}
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
              {data.title}
            </h1>
            <p className="text-sm leading-relaxed text-gray-600 sm:text-base">
              {data.description}
            </p>
          </div>

          {/* Large Banner Image */}
          <div className="overflow-hidden rounded-[2rem] shadow-md">
            <img
              src={data.image}
              alt={data.title}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Core Objective Highlights */}
          <div className="space-y-4 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-black text-gray-950">
              What you will learn inside this bundle
            </h3>
            <div className="grid grid-cols-1 gap-3 text-xs font-medium text-gray-700 sm:text-sm lg:grid-cols-2">
              <p className="flex items-start gap-2">
                <span>✅</span> Core supervised & unsupervised learning
                algorithms
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Neural network builds using TensorFlow & PyTorch
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> Model evaluation, hyperparameter tuning &
                feature engineering
              </p>
              <p className="flex items-start gap-2">
                <span>✅</span> End-to-end Machine Learning capstone deployment
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
              {data.series.map((module) => {
                const isOpen = expandedSeriesIds.includes(module.id);
                return (
                  <div
                    key={module.id}
                    className="overflow-hidden rounded-2xl border border-gray-100 shadow-sm"
                  >
                    {/* Header Trigger Row */}
                    <button
                      type="button"
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
                        className={`text-xs text-gray-400 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▼
                      </span>
                    </button>

                    {/* Open Lesson Sublist */}
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
                {data.instructor.charAt(6)}
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <Link
                    to="/instructors/htetwai"
                    className="text-base font-bold text-gray-900 hover:text-emerald-600"
                  >
                    {data.instructor}
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

        {/* RIGHT COLUMN: STICKY FLOATING CHECKOUT CARD */}
        <div className="lg:col-span-1">
          <div className="sticky top-5 space-y-6 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-xl">
            {/* Pricing Values */}
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

            {/* CTA Triggers */}
            <div className="space-y-2.5">
              <button
                type="button"
                className="w-full rounded-2xl bg-emerald-500 py-3.5 text-xs font-black text-white shadow-md transition-colors hover:bg-emerald-600 sm:text-sm"
              >
                Buy Full Specialization Bundle
              </button>

              {/* Single Course Option linked button */}
              <Link
                to={`/courses/${data.id}/single`}
                className="block w-full rounded-2xl border border-gray-950 bg-gray-950 py-3.5 text-center text-xs font-black text-white transition-colors hover:bg-gray-800 sm:text-sm"
              >
                Single Course Option
              </Link>
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
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
