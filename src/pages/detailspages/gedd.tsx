import { useState } from "react";
import { Link } from "react-router";
import GedImg from "@/assets/forDetail/ged.png";

const gedCourseData = {
  title: "GED For Everybody Exam Preparation",
  description:
    "Master all 4 GED subjects (Math, RLA, Social Studies, Science) with structured practice, exam strategies, and core conceptual reviews to secure your high school equivalency diploma.",
  category: "Academic",
  instructor: "Tr. Berry (KMD)",
  instructorRole: "Academic Lead · GED Instructor",
  instructorBio:
    "Tr. Berry has guided hundreds of students through GED preparation with structured test-taking strategies and personalized subject guidance.",
  bundlePrice: 800000,
  bundleOriginalPrice: 1000000,
  singleSubjectPrice: 250000,
  image: GedImg,
  includes: [
    "Comprehensive coverage of selected subjects",
    "Real exam simulator practice questions",
    "40+ downloadable formula & cheat sheets",
    "Full lifetime access & video lessons",
    "Access on mobile and desktop",
    "Official readiness assessment guidance",
  ],
  subjects: [
    {
      id: "math",
      name: "Mathematical Reasoning",
      lessons: [
        "Algebraic Expressions & Equations (20:15)",
        "Geometry & Perimeter Calculations (18:40)",
        "Functions & Graph Interpretation (25:10)",
      ],
    },
    {
      id: "rla",
      name: "Reasoning Through Language Arts (RLA)",
      lessons: [
        "Reading Comprehension Strategies (22:30)",
        "Extended Response Essay Writing (30:00)",
        "Grammar & Sentence Structure (15:45)",
      ],
    },
    {
      id: "social",
      name: "Social Studies",
      lessons: [
        "US History & Civics Foundations (24:10)",
        "Economics & Global Geography (19:20)",
        "Reading Charts, Graphs & Historical Texts (16:05)",
      ],
    },
    {
      id: "science",
      name: "Science",
      lessons: [
        "Life Science & Cell Biology (21:00)",
        "Physical Science & Chemical Reactions (26:15)",
        "Earth & Space Science Principles (17:30)",
      ],
    },
  ],
};

export default function gedd() {
  const [selectSubject, setSelectSubject] = useState<string[]>([
    "math",
    "rla",
    "social",
    "science",
  ]);

  const subjectHandler = (subj: string) => {
    if (selectSubject.includes(subj)) {
      if (selectSubject.length > 1) {
        setSelectSubject(selectSubject.filter((id) => id != subj));
      }
    }
  };

  const [extraSubject, setExtraSubject] = useState<string[]>(["math"]);

  const toggleController = (subid: string) => {
    setExtraSubject((sub) =>
      sub.includes(subid) ? sub.filter((id) => id != subid) : [...sub, subid],
    );
  };

  return <div>gedd</div>;
}
