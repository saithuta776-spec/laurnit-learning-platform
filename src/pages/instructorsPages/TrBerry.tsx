import { Link } from "react-router";

// Mock Data for the Instructor Profile
const instructorData = {
  name: "Tr. Berry",
  role: "Academic Lead · GED Senior Instructor",
  avatarLetters: "BY", // Used if no profile image asset is loaded
  bio: "Tr. Berry has guided hundreds of students through secondary academic paths and international high school equivalency preparation. Specializing in test-taking psychology and structured problem-solving matrices, they turn complex subject core metrics into accessible, step-by-step logical frameworks.",
  stats: [
    { label: "Active Students", value: "1,200+" },
    { label: "Passing Rate", value: "94%" },
    { label: "Years Experience", value: "6+ Yrs" },
  ],
  credentials: [
    "Expert Curriculum Designer for International Test Formats",
    "Certified Academic Lead Trainer",
    "Specialist in Advanced Algebra & Frameworks",
  ],
  coursesTaught: [
    {
      id: "ged-prep",
      title: "GED For Everybody Exam Preparation",
      category: "Academic",
      path: 2, // Route back to your GED page
    },
    // You can add more courses here later as your platform expands!
  ],
};

export default function TeacherBerryPage() {
  return (
    <div className="container mx-auto max-w-4xl px-6 py-10">
      {/* Back to courses navigation */}
      <div className="mb-8">
        <Link
          to="/courses"
          className="flex items-center gap-1 text-xs font-bold text-gray-400 transition-colors hover:text-emerald-600"
        >
          ◀ Back to Courses
        </Link>
      </div>

      <div className="space-y-8">
        {/* HERO CARD PROFILE LAYER */}
        <div className="flex flex-col items-center gap-6 rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm sm:flex-row">
          {/* Large Avatar badge icon */}
          <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-3xl font-black text-white shadow-md">
            {instructorData.avatarLetters}
          </div>

          <div className="space-y-2 text-center sm:text-left">
            <h1 className="text-3xl font-black tracking-tight text-gray-950">
              {instructorData.name}
            </h1>
            <p className="text-sm font-bold text-emerald-700">
              {instructorData.role}
            </p>
            <p className="text-xs text-gray-400">
              Official Instructor Verified · Active Faculty
            </p>
          </div>
        </div>

        {/* METRICS COUNTING ROW GRID */}
        <div className="grid grid-cols-3 gap-4">
          {instructorData.stats.map((stat, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-gray-100 bg-white p-4 text-center shadow-sm"
            >
              <p className="text-xl font-black text-gray-950 sm:text-2xl">
                {stat.value}
              </p>
              <p className="mt-0.5 text-[10px] font-bold tracking-wider text-gray-400 uppercase">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* BIOGRAPHY & CREDENTIALS SECTION */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Main Bio Text Block */}
          <div className="space-y-4 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:col-span-2">
            <h3 className="text-lg font-black text-gray-950">
              About the Instructor
            </h3>
            <p className="text-sm leading-relaxed font-medium text-gray-600">
              {instructorData.bio}
            </p>
          </div>

          {/* Credentials Checklist Sidebar column */}
          <div className="space-y-4 rounded-[2rem] border border-gray-100 bg-white p-6 shadow-sm md:col-span-1">
            <h3 className="text-sm font-black tracking-wider text-gray-400 uppercase">
              Expertise
            </h3>
            <ul className="space-y-3">
              {instructorData.credentials.map((cred, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs font-semibold text-gray-700"
                >
                  <span className="mt-0.5 text-emerald-600">✔</span>
                  <span>{cred}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* COURSES CATALOG BY THIS TEACHER */}
        <div className="space-y-4">
          <h3 className="text-xl font-black text-gray-950">
            Active Catalog Courses
          </h3>
          <div className="space-y-3">
            {instructorData.coursesTaught.map((course) => (
              <div
                key={course.id}
                className="flex items-center justify-between rounded-2xl bg-[#f4f4f5] px-6 py-5 transition-all hover:bg-gray-200/80"
              >
                <div className="space-y-1">
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-800 uppercase">
                    {course.category}
                  </span>
                  <h4 className="mt-1 text-base font-black tracking-tight text-gray-950">
                    {course.title}
                  </h4>
                </div>

                <Link
                  to={`/course/${course.path}`}
                  className="rounded-xl border border-gray-100 bg-white px-4 py-2 text-xs font-black text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50"
                >
                  View Course
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
