import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { siteConfig } from "@/config/site";
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Mail,
  User,
  Shield,
  PlayCircle,
} from "lucide-react";

import MernImg from "@/assets/MERN.webp";
import McsImg from "@/assets/Math.jpg";
import UuxImg from "@/assets/Ui.jpg";
// Sample purchased courses / furniture assembly guides data
const purchasedCourses = [
  //   {
  //     id: "course-1",
  //     title: "Woodworking Fundamentals & Chair Crafting",
  //     category: "Wooden Furniture",
  //     purchasedDate: "July 12, 2026",
  //   progress: 75,
  //   totalLessons: 12,
  //   completedLessons: 9,
  //   status: "In Progress",
  //     image:
  //       "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&q=80&w=400",
  //   },

  {
    id: 3,
    title: "MERN Full-stack Developer",
    category: ["Computer Science", "Information Technology"],
    instructor: "Sayar Kyaw Ye + Assistant teachers",
    duration: "8 months",
    level: "Basic to Adv",
    image: MernImg,
    status: "In Progress",
    totalLessons: 12,
    completedLessons: 9,
    progress: 75,
    purchasedDate: "July 12, 2026",
  },

  {
    id: 6,
    title: "Mathematics For Computer Science",
    category: ["Computer Science", "Academic"],
    instructor: "Sayar Htet Wai",
    duration: "3 months",
    level: "Beginner",
    image: McsImg,
    status: "In Progress",
    totalLessons: 12,
    completedLessons: 9,
    progress: 55,
    purchasedDate: "May 28, 2026",
  },

  {
    id: 12,
    title: "Mastering UI/UX",
    category: "Design",
    instructor: "Stam Organization",
    duration: "8 months",
    level: "Basic to Adv",
    image: UuxImg,
    status: "Complete",
    totalLessons: 12,
    completedLessons: 12,
    progress: 100,
    purchasedDate: "May 4, 2026",
  },
];

export default function ProfilePage() {
  const [user, setUser] = useState({
    name: "Sai Thuta",
    email: "sai@example.com",
    role: "Student & Craft Enthusiast",
  });

  return (
    <div className="min-h-screen bg-slate-50/50 py-10">
      <div className="container mx-auto max-w-6xl space-y-8 px-4">
        {/* Profile Header Banner */}
        <Card className="overflow-hidden border-none bg-white shadow-md">
          <div className="relative h-32 bg-[#74be97]">
            <div className="absolute -bottom-10 left-6 sm:left-10">
              <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-emerald-800 text-2xl font-bold text-white shadow-md sm:h-24 sm:w-24 sm:text-3xl">
                {user.name.charAt(0)}
              </div>
            </div>
          </div>
          <CardContent className="flex flex-col gap-4 px-6 pt-12 pb-6 sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:pt-14">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-[#74be97]" />
                {user.email}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Badge
                variant="secondary"
                className="bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 hover:bg-emerald-100"
              >
                {user.role}
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Main Tabs Area */}
        <Tabs defaultValue="courses" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-2 bg-slate-200/60 p-1">
            <TabsTrigger
              value="courses"
              className="font-semibold data-[state=active]:bg-white data-[state=active]:text-[#74be97]"
            >
              My Courses ({purchasedCourses.length})
            </TabsTrigger>
            <TabsTrigger
              value="settings"
              className="font-semibold data-[state=active]:bg-white data-[state=active]:text-[#74be97]"
            >
              Account Settings
            </TabsTrigger>
          </TabsList>

          {/* TAB 1: Purchased Courses */}
          <TabsContent value="courses" className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900">
                Enrolled Workshops & Courses
              </h2>
              <Button
                asChild
                variant="outline"
                className="border-[#74be97] text-sm text-[#74be97] hover:bg-emerald-50"
              >
                <Link to="/courses">Explore More</Link>
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {purchasedCourses.map((course) => (
                <Card
                  key={course.id}
                  className="flex flex-col justify-between overflow-hidden border border-slate-100 shadow-sm transition-all hover:shadow-md"
                >
                  <div>
                    <div className="relative h-40 w-full overflow-hidden bg-slate-100">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="h-full w-full object-cover"
                      />
                      <Badge
                        className={`absolute top-3 right-3 text-xs ${
                          course.status === "Completed"
                            ? "bg-emerald-600 text-white"
                            : "bg-amber-500 text-white"
                        }`}
                      >
                        {course.status}
                      </Badge>
                    </div>

                    <CardContent className="space-y-3 p-5">
                      <p className="text-xs font-semibold tracking-wider text-[#74be97] uppercase">
                        {course.category}
                      </p>
                      <h3 className="line-clamp-2 font-bold text-gray-900">
                        {course.title}
                      </h3>
                      <p className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        Purchased: {course.purchasedDate}
                      </p>

                      <div className="space-y-1.5 pt-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span className="text-gray-600">Progress</span>
                          <span className="text-gray-900">
                            {course.progress}%
                          </span>
                        </div>
                        <Progress
                          value={course.progress}
                          className="h-2 bg-slate-100 [&>div]:bg-[#74be97]"
                        />
                        <p className="pt-1 text-xs text-muted-foreground">
                          {course.completedLessons} of {course.totalLessons}{" "}
                          lessons completed
                        </p>
                      </div>
                    </CardContent>
                  </div>

                  <div className="p-5 pt-0">
                    <Button className="w-full gap-2 bg-[#74be97] text-white hover:bg-emerald-600">
                      <PlayCircle className="h-4 w-4" />
                      {course.status === "Completed"
                        ? "Review Course"
                        : "Continue Learning"}
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* TAB 2: Account Settings Form */}
          <TabsContent value="settings" className="mt-6">
            <Card className="border border-slate-100 shadow-sm">
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
                <CardDescription>
                  Update your personal details and account preferences.
                </CardDescription>
              </CardHeader>
              <CardContent className="max-w-xl space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <Input
                    value={user.name}
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <Input
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Headline / Role
                  </label>
                  <Input
                    value={user.role}
                    onChange={(e) => setUser({ ...user, role: e.target.value })}
                  />
                </div>
                <Button className="bg-[#74be97] text-white hover:bg-emerald-600">
                  Save Changes
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
