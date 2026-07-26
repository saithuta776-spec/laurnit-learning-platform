import { Link } from "react-router";
// import Header from "../components/ui/Header";
import heroImage from "@/assets/Homepage.avif";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Injecting the header specifically on this page */}
      {/* 2. Main Hero Grid Wrapper Section */}
      <main className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Column: Core Hero Text & CTA Button */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold tracking-tight text-emerald-700 lg:text-3xl">
                Learn Without Limits
              </h2>
              <h1 className="text-4xl font-extrabold tracking-tight text-emerald-900 sm:text-5xl lg:text-6xl">
                Advanced your career
              </h1>
            </div>

            <p className="max-w-xl text-base leading-relaxed text-gray-700">
              Start, switch, or advance your career with more than 7,000
              courses, Professional Certificates, and degrees from world-class
              universities and companies.
            </p>

            <div>
              <Link
                to="/shop"
                className="inline-block rounded-full bg-[#4a8b6c] px-8 py-3.5 text-lg font-medium text-white shadow-md transition-all hover:bg-[#3c7258] hover:shadow-lg"
              >
                Explore course
              </Link>
            </div>
          </div>

          {/* Right Column: Imagery Section (Relative for the badge overlap) */}
          <div className="relative">
            {/* Main Rounded Laptop Artwork */}
            <div className="overflow-hidden rounded-[2.5rem] shadow-xl">
              <img
                src={heroImage}
                alt="Workspace setup with laptop and blueprint designs"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Overlapping Floating Badge ("+100 joined already") */}
            <div className="absolute -top-6 right-4 flex items-center gap-3 rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:right-8">
              {/* Overlapping profile circle avatars */}
              <div className="flex -space-x-3">
                <div className="h-8 w-8 rounded-full border-2 border-white bg-red-500" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-amber-500" />
                <div className="h-8 w-8 rounded-full border-2 border-white bg-gray-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-bold tracking-tight text-gray-800">
                  +100 joined already
                </span>
                {/* Micro progress line accent */}
                <div className="mt-1 h-1 w-20 rounded-full bg-red-500" />
              </div>
            </div>
          </div>
        </div>

        {/* 3. Bottom Row: Statistics Analytics Counters */}
        <section className="mt-16 grid max-w-2xl grid-cols-3 gap-6 border-t border-gray-100 pt-12">
          <div className="space-y-1">
            <p className="text-4xl font-black tracking-tight text-emerald-800 lg:text-5xl">
              200+
            </p>
            <p className="text-sm font-semibold tracking-wide text-gray-600">
              Learners
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-black tracking-tight text-emerald-800 lg:text-5xl">
              30+
            </p>
            <p className="text-sm font-semibold tracking-wide text-gray-600">
              Coursers
            </p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl font-black tracking-tight text-emerald-800 lg:text-5xl">
              20+
            </p>
            <p className="text-sm font-semibold tracking-wide text-gray-600">
              Partners
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
