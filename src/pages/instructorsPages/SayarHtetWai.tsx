import { Link } from "react-router";

// Instructor Profile Data for Sayar Htet Wai
const instructorData = {
  name: "Sayar Htet Wai",
  role: "Senior AI & Computer Science Educator",
  avatarLetters: "HW",
  bio: "Sayar Htet Wai specializes in breaking down complex computational concepts, data science workflows, and mathematical foundations for aspiring tech professionals. With years of hands-on experience in software engineering and machine learning, he focuses on practical implementation and structured logic.",
  stats: [
    { label: "Active Students", value: "3,500+" },
    { label: "Course Completion", value: "92%" },
    { label: "Years Experience", value: "8+ Yrs" },
  ],
  credentials: [
    "Lead Curriculum Architect for Computer Science Tracks",
    "Specialist in Python, Data Science & Machine Learning",
    "Expert in Applied Mathematics for Tech & AI",
  ],
  coursesTaught: [
    {
      id: 1,
      title: "Data Analysis with Python",
      category: "Computer Science",
      duration: "8 months",
      level: "Beginner",
    },
    {
      id: 5,
      title: "Foundation For Computer Science",
      category: "Computer Science",
      duration: "2 months",
      level: "Beginner",
    },
    {
      id: 6,
      title: "Mathematics For Computer Science",
      category: "Computer Science",
      duration: "3 months",
      level: "Beginner",
    },
    {
      id: 15,
      title: "Data Science Specialization",
      category: "Information Technology",
      duration: "8 months",
      level: "Int to Adv",
    },
    {
      id: 24,
      title: "Machine Learning Specialization",
      category: "AI",
      duration: "8 months",
      level: "Inter to Adv",
    },
  ],
};

export default function SayarHtetWaiPage() {
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
          {/* Avatar badge icon */}
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
              Official Instructor Verified · Senior Faculty
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

          {/* Credentials Checklist Sidebar */}
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
            Active Catalog Courses ({instructorData.coursesTaught.length})
          </h3>
          <div className="space-y-3">
            {instructorData.coursesTaught.map((course) => (
              <div
                key={course.id}
                className="flex flex-col gap-4 rounded-2xl bg-[#f4f4f5] px-6 py-5 transition-all hover:bg-gray-200/80 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-black tracking-wider text-emerald-800 uppercase">
                      {course.category}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-500">
                      🕒 {course.duration} · 📈 {course.level}
                    </span>
                  </div>
                  <h4 className="text-base font-black tracking-tight text-gray-950">
                    {course.title}
                  </h4>
                </div>

                <Link
                  to={`/course/${course.id}`}
                  className="self-start rounded-xl border border-gray-100 bg-white px-4 py-2 text-xs font-black text-emerald-700 shadow-sm transition-colors hover:bg-emerald-50 sm:self-center"
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
