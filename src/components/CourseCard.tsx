import { Link } from "react-router";

interface CourseType {
  id: number;
  title: string;
  image: string;
  instructor: string;
  duration: string;
  level: string;
}

export default function CourseCard({
  id,
  title,
  image,
  instructor,
  duration,
  level,
}: CourseType) {
  return (
    <Link
      to={`/course/${id}`}
      className="mt-4 flex flex-col justify-between overflow-hidden rounded-[2rem] bg-white p-4 shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <div className="h-44 w-full overflow-hidden rounded-[1.5rem] bg-gray-100">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="mt-4 flex flex-1 flex-col justify-between space-y-2 px-1 text-gray-900">
        <h3 className="line-clamp-1 text-sm leading-snug font-black tracking-tight sm:text-base">
          {title}
        </h3>
        <p className="-space-x-2 text-xs font-medium text-gray-500">
          {instructor}
        </p>
        <div className="my-3 border-t border-gray-100" />

        <div className="flex items-center justify-between gap-4 text-xs font-semibold text-gray-600">
          <span className="flex items-center gap-1">🕒{duration}</span>
          <span className="flex items-center gap-1">📈 {level}</span>
        </div>

        <div className="mt-4">
          <button className="w-full rounded-xl bg-[#66947c] py-2.5 text-xs text-white transition-colors hover:bg-[#537c66]">
            View Course
          </button>
        </div>
      </div>
    </Link>
  );
}
